import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from '../../models/Tag'
import { TagsService } from '../../services/tags.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tags',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']

})
export class TagComponent {

  @Input() tags: Array<Tag>;
  @Output() outTags: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();
  @Output() currentTags :EventEmitter<Array<Tag>> = new EventEmitter<Array<Tag>>();
  public allTags: Tag[] = [];
  public filteredTag: Observable<Tag[]>;
  public form: FormGroup;
  public colors = ['#E53935', '#D81B60', '#8E24AA', '#1E88E5', '#43A047', '#FB8C00', '#00BCD4', '#8E24AA']

  constructor(private tagsService: TagsService, private fb: FormBuilder) {
    this.form = this.fb.group({ tagText: [''] });
    if (!this.tags) {
      this.tags = new Array();
    }
    this.tagsService.getAllTag().subscribe(res => {
      res['hydra:member'].forEach(element => {
         this.allTags.push(new Tag(element['id'],element['name'],element['color']))
      });
      this.filteredTag = this.form.controls.tagText.valueChanges.pipe(
        startWith(''), map(tag => tag ? this._filterTag(tag) : this.allTags.slice())
      );
    });
  }

  private _filterTag(value: string): Tag[] {
    const filterValue = value.toLowerCase();
    return this.allTags.filter(tag => tag.name.toLowerCase().indexOf(filterValue) === 0);
  }

  remove(tag: Tag) {
    this.tags = this.tags.filter(el => el.id != tag.id);
    this.emit();

  }

  addTextChip() {
    let tagName = this.form.value.tagText.toLowerCase().trim()
    if (this.form.value.tagText && tagName.length > 0) {

      if (this.tagAlreadyExist(tagName)) {
       this.tags= [...this.tags,this.allTags.find(tag => tag.name===tagName)]
       this.emit();
       this.form.reset();
      } else {
        this.tagsService.newTag({
          "name": this.form.value.tagText,
          "color": "#1E88E5"
        }).subscribe(res => {
          let tmp = new Tag(res['id'], res['name'], res['color']) ;
          this.tags.push(tmp);
          this.allTags.push(tmp);
          this.emit();
          this.form.reset();
        })
      }
    }
  }

  getAllUri():Array<string>{
    let tabURI= new Array();
    this.tags.forEach(tag=>{tabURI.push('api/tags/'+tag['id'])});
    return tabURI;
  }

  emit(){
    this.outTags.emit(this.getAllUri());
    this.currentTags.emit(this.tags);
    }

  tagAlreadyExist(tagName : string): boolean{
    let exist = false;
    this.allTags.forEach(el=>{
      if(el.name === tagName){
        exist=true;
      }
    });
    return exist;
  }

  changeColor(tag: Tag) {
    let i = this.colors.indexOf(tag.color);
    if (i - 1 === this.colors.length) {
      tag.color = this.colors[0];
    } else {
      tag.color = this.colors[i + 1];
    }
    this.tagsService.updateTag(tag).subscribe(()=>{
      this.allTags.find(el => el.id === tag.id)['color']= tag.color;
    });
   
  }


}
