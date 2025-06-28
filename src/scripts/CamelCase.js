/**
	{
		"api":1,
		"name":"Camel Case",
		"description":"convertsYourTextToCamelCase",
		"author":"Ivan",
		"icon":"camel",
		"tags":"camel,case,function,lodash"
	}
**/

import { camelCase } from 'lodash';

export function main(input) {
	
    input.text = camelCase(input.text)
	
}
