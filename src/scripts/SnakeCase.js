/**
	{
		"api":1,
		"name":"Snake Case",
		"description":"converts_your_text_to_snake_case.",
		"author":"Ivan",
		"icon":"snake",
		"tags":"snake,case,function,lodash"
	}
**/

import { snakeCase } from 'lodash';

export function main(input) {
	
    input.text = snakeCase(input.text)
	
}
