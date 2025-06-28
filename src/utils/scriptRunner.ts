// Universal script runner for Boop scripts
export interface BoopState {
  text: string;
  postError: (message: string) => void;
}

export async function runBoopScript(scriptPath: string, inputText: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // Create a state object that matches what Boop scripts expect
    const state: BoopState = {
      text: inputText,
      postError: (message: string) => reject(new Error(message))
    };

    try {
      // Dynamically require the script
      const scriptModule = require(scriptPath);
      
      // If the script has a main function, call it
      if (typeof scriptModule.main === 'function') {
        scriptModule.main(state);
      } else {
        // If no main export, evaluate the script in a context where main() is available
        const fs = require('fs');
        const scriptContent = fs.readFileSync(scriptPath, 'utf8');
        
        // Create a function context with the state and main function
        const scriptFunction = new Function('state', `
          ${scriptContent}
          if (typeof main === 'function') {
            main(state);
          }
        `);
        
        scriptFunction(state);
      }
      
      resolve(state.text);
    } catch (error) {
      reject(error);
    }
  });
}
