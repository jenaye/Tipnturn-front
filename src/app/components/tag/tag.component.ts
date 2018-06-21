import { Component, OnChanges } from '@angular/core';
import { MatInput, MatAutocompleteTrigger } from '@angular/material';
import {FormControl, ControlValueAccessor} from '@angular/forms';



@Component({
  selector: 'app-tags',
  templateUrl: './tag.component.html',
  
})
export class TagComponent implements ControlValueAccessor, OnChanges {

  public filteredSources: Tag[] = [];


}
