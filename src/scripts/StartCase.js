/**
	{
		"api":1,
		"name":"Start Case",
		"description":"Converts Your Text To Start Case.",
		"author":"Ivan",
		"icon":"type",
		"tags":"start,case,function,lodash"
	}
**/

import { startCase } from 'lodash';

export function main(input) {
	
    input.text = startCase(input.text)
	
}
