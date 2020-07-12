import { Component } from '@angular/core';
import { MatDialog, MatTableDataSource, MAT_DIALOG_DATA } from '@angular/material';

angular.module('buttonsDemoBasic', ['ngMaterial'])
  .controller('AppCtrl', function ($scope) {
    $scope.title1 = 'Button';
    $scope.title4 = 'Warn';
    $scope.isDisabled = true;
    $scope.googleUrl = 'http://google.com';
  });

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
}


