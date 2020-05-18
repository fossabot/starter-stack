import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
