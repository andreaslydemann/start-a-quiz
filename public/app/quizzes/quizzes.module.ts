import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {MyQuizzesComponent} from './my-quizzes/my-quizzes.component';
import {AllQuizzesComponent} from './all-quizzes/all-quizzes.component';

import {QuizzesRouting} from "./quizzes.routing";
import {EditableTableModule} from '../editable-table/editable-table.module';
import {QuestionsModule} from "../questions/questions.module";

import {QuizService} from "./quiz.service";

@NgModule({
    imports: [
        CommonModule,
        EditableTableModule,
        RouterModule,
        QuestionsModule,
        QuizzesRouting
    ],
    providers: [QuizService],
    declarations: [MyQuizzesComponent, AllQuizzesComponent]
})
export class QuizzesModule {
}