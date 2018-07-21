import {Component, OnInit, ViewChild} from '@angular/core';
import {ListingmemberService} from '../../services/listingmember.service';
import {ActivitiesService} from '../../services/activities.service';
import {FinancialService} from '../../services/financial.service';
import {UsersService} from '../../services/users.service';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

@Component({selector: 'app-dashboard', templateUrl: './dashboard.component.html', styleUrls: ['./dashboard.component.css']})
export class DashboardComponent implements OnInit {

     @ViewChild('barchart') barchart: BaseChartDirective;


    constructor(private listemembre: ListingmemberService,
                private activiteService: ActivitiesService,
                private bilanService: FinancialService,
                private usersService: UsersService
    ) {}

    public ok: boolean = false;
    public okMoney: boolean = false;
    public nbmembres : any;
    public nbAdmin :number =0;
    public monney: any;
    public activities = [];
    public nbActivity: any;
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    position: 'left',
                    ticks: {
                        min: 0,
                    }
                }
            ]
        }
    };
    public barChartLabels: string[] = ['Activites'];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = false;
    public barChartData: any[];
    public barChartColors: Array<any> = ["#E53935", "#D81B60","#3949AB","#1E88E5",
      "#039BE5","#00ACC1",
      "#00897B","#43A047",
      "#7CB342","#C0CA33",
      "#FDD835","#FB8C00",
      "#F4511E"] ;
    public chartColors : any[] = [{ backgroundColor: ["#E53935", "#D81B60", 
                                                      "#8E24AA", "#5E35B1"                   
                            ]
        }
    ];

   

    public doughnutChartLabels: string[] = ['Rentrée', 'Sortie'];
    public doughnutChartData: any = [];
    public doughnutChartType: string = 'doughnut';
    public color = 'warn';
    public mode = 'indeterminate';

    ngOnInit() {
        this.usersService.count().subscribe(res=>{
            this.nbAdmin = <number>res;
        })
        this.listemembre.getData().subscribe(res=>{
            this.nbmembres=  res['hydra:totalItems'];
        })
        this.bilanService.getMoney().subscribe(monney => {

           this.monney = monney;
                const arr = Object.keys(monney).map(function (key) {
                        return monney[key];
                    });
                this.doughnutChartData.push(arr);
                this.okMoney = true;
            })

        this.activiteService.getData().subscribe(activities => {

                this.barChartData = [];
                this.nbActivity = activities['hydra:totalItems'];

                activities['hydra:member'].forEach(activite => {
                   this.barChartData =  [...this.barChartData, {data: [activite.membres.length], label: activite.name}];
                });
                this.ok = true;
              
            });

    }


}
