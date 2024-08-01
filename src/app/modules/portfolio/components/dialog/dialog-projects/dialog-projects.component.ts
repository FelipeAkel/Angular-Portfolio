import { IProjects } from './../../../interface/IProjects';
import { Component, Inject, OnInit, signal } from '@angular/core';
import { MatDialogModule, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})

export class DialogProjectsComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IProjects,
  ){}

  public getData = signal< IProjects | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public closeDialog()
  {
    this.dialogRef.close();
  }

}
