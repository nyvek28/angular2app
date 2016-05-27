
import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive';

@Component({
  selector: 'courses',
  template: `
            <h1>{{title}}</h1>
            <input type='text' autoGrow/>
            <ul>
              <li *ngFor='#course of courses'>
                {{course}}
              </li>
            </ul>
            `,
  providers: [CourseService],
  directives: [AutoGrowDirective]
})
export class CoursesComponent{
  title = 'Courses'
  courses;

  constructor(courseService: CourseService){
    this.courses = courseService.getCourses();
  }

}
