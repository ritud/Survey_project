import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

transform(arr: Array<any>,search_content: string): any {
  	if (!search_content){ return arr; }
  	var newArr = [];
  	for (let survey of arr){
  		if (survey.question.toString().toLowerCase().includes(search_content.toLowerCase()))
  			{ newArr.push(survey); }
  	}
    return newArr;
  }

}
