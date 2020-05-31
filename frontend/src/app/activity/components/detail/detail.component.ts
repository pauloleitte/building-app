import { SharedService } from "./../../../shared/services/shared.service";
import { ActivityService } from "./../../activity.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"],
})
export class DetailComponent implements OnInit {
  formActivity: FormGroup;
  isDelete = false;
  id: string;

  constructor(
    private _builder: FormBuilder,
    private _service: ActivityService,
    private _sharedService: SharedService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.formActivity = this._builder.group({
      id: [""],
      name: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      percent: ["", [Validators.required]],
    });
  }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      if (params.action == "delete") {
        this.isDelete = true;
        this.formActivity.disable();
      }
      if (params.id) {
        this.getActivity(params.id);
        this.id = params.id;
      }
    });

  }

  save(): void {
    if (!this.id) {
      this._service.postActivity(this.formActivity.value).subscribe(
        (res) => {
          this._sharedService.showMessage("Atividade cadastrada com sucesso!");
          this.resetForm();
          this.backToList();
        },
        (err) => this._sharedService.showMessage("Ops, ocorreu um erro!", true)
      );
    } else {
      this._service.putActivity(this.formActivity.value).subscribe(
        (res) => {
          this._sharedService.showMessage("Atividade atualizada com sucesso!");
          this.resetForm();
          this.backToList();
        },
        (err) => this._sharedService.showMessage("Ops, ocorreu um erro!", true)
      );
    }
  }

  getActivity(id: string) {
    this._service.getActivity(id).subscribe(
      (res) => {
        this.formActivity.patchValue({
          name: res.name,
          percent: res.percent,
          id: id,
        });
      },
      (err) => this._sharedService.showMessage("Ops, ocorreu um erro!", true)
    );
  }

  cancel(): void {
    this.resetForm();
    this.backToList();
  }

  delete() {
    this._service.deleteActivity(this.id).subscribe(
      (res) => {
        this._sharedService.showMessage("Atividade excluida com sucesso!");
        this.resetForm();
        this.backToList();
      },
      (err) => this._sharedService.showMessage("Ops, ocorreu um erro!", true)
    );
  }

  backToList() {
    this._router.navigate(["/activities"]);
  }

  resetForm() {
    this.formActivity.reset();
  }
}
