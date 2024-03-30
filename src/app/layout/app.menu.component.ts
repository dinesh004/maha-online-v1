import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    user = {
        name: 'Dinesh Hire',
        profilePicUrl: 'https://pixabay.com/get/ga0fd782cefcd9048c0a4dd1354bd857f7f211b9a77e6ecdd4d82f85d02ad305e67b1c560e28f829a63fc25ca665357a646fb42afb8da0d99cac2902c102852e914057d9c5a1d87d84431435ee0d484b8_640.jpg'
      };
    constructor(public layoutService: LayoutService) { }

    ngOnInit() {

        this.model = [

            {
                // label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'], }
                ]
            },
            {
                // label: 'UI Components',
                items: [
                    { label: 'Asmita Registration',
                    icon: 'pi pi-fw pi-id-card',
                        items: [
                            {
                                label: 'Asmita Registration',
                                icon: 'pi pi-fw pi-sign-in',
                            },
                            {
                                label: 'अस्मिता वॉलेट रीचार्ज',
                                icon: 'pi pi-fw pi-sign-in',
                            }
                        ]},

                        { label: 'Department of Animal Husbandry, Dairying',
                          icon: 'pi pi-fw pi-id-card',
                        items: [
                            {
                                label: 'Post Mortom',
                                icon: 'pi pi-fw pi-sign-in',
                            },
                            {
                                label: 'Sample Testing',
                                icon: 'pi pi-fw pi-sign-in',
                            },
                            {
                                label: 'Health Certificate',
                                icon: 'pi pi-fw pi-sign-in',
                            },
                            {
                                label: 'Artificial Insemination',
                                icon: 'pi pi-fw pi-sign-in',
                            },
                            {
                                label: 'Farmer Training',
                                icon: 'pi pi-fw pi-sign-in',
                            },
                            {
                                label: 'Training for unemployed',
                                icon: 'pi pi-fw pi-sign-in',
                            },
                        ]},



                        { label: 'Department of fisheries',
                          icon: 'pi pi-fw pi-id-card',
                        items: [
                            {
                                label: 'Issuance of Fishing permit to fishermen',
                                icon: 'pi pi-fw pi-sign-in',
                            },
                            {
                                label: 'Registration of fisheries society',
                                icon: 'pi pi-fw pi-sign-in',
                            },
                            {
                                label: 'Fresh water farms/hatchery',
                                icon: 'pi pi-fw pi-sign-in',
                            },
                            {
                                label: 'Fishing Vessel Registration',
                                icon: 'pi pi-fw pi-sign-in',
                            },
                            {
                                label: 'Fishing license for fishing vessels',
                                icon: 'pi pi-fw pi-sign-in',
                            },

                        ]},

                        { label: 'HED - MSBTE',
                        icon: 'pi pi-fw pi-id-card',
                      items: [

                          {
                              label: 'Transcript Certificate',
                              icon: 'pi pi-fw pi-sign-in',
                          },
                          {
                              label: 'Duplicate Marksheet',
                              icon: 'pi pi-fw pi-sign-in',
                          },
                          {
                              label: 'Duplicate Certificate',
                              icon: 'pi pi-fw pi-sign-in',
                          },

                      ]},



                      { label: 'HED - University',
                      icon: 'pi pi-fw pi-id-card',
                    items: [
                        {
                            label: 'Duplicate Marksheet',
                            icon: 'pi pi-fw pi-sign-in',
                        },
                        {
                            label: 'Document Verification',
                            icon: 'pi pi-fw pi-sign-in',
                        },
                        {
                            label: 'Migration Eligibilty Certificate`',
                            icon: 'pi pi-fw pi-sign-in',
                        },
                        {
                            label: 'Retotaling of marks',
                            icon: 'pi pi-fw pi-sign-in',
                        },


                    ]},



                    { label: 'Industries',
                    icon: 'pi pi-fw pi-id-card',
                  items: [
                      {
                          label: '3718',
                          icon: 'pi pi-fw pi-sign-in',
                      },


                  ]},

                  { label: 'Land Record Services',
                    icon: 'pi pi-fw pi-id-card',
                  items: [
                      {
                          label: 'Aakarphod',
                          icon: 'pi pi-fw pi-sign-in',
                      },
                      {
                        label: 'Kami Jasti Patrak',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'Issuing Certified Copy of Survey Record',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'Issuing Certified Copy of Decision in Appeal Or Revision',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'Mutation Entry Un-disputed',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'Mutation Entry Disputed',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'Mutation Entry Missing Link',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'Mutation Entry Land Acquision - Road Setback etc.',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'Issue of Document C',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'Measurement Very Urgent',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'Measurement Urgent',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'Measurement Ordinary',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'Separate Property Card in the name of Govt. Or Competent Authority (no Difference in area)',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'Issuing Certified Copy of Property Card for Mumbai Suburban District',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'Separate Property Card Difference in Area',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'Separate Property Card No Difference in Area',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'Separate Property Card in the name of Govt. Or Competent Authority ( difference in area)',
                        icon: 'pi pi-fw pi-sign-in',
                    },

                  ]},


                  { label: 'Rural Development and Panchayat Raj Department',
                    icon: 'pi pi-fw pi-id-card',
                  items: [
                      {
                          label: 'Below Poverty Line Certificate',
                          icon: 'pi pi-fw pi-sign-in',
                      },
                      {
                        label: 'Birth Certificate',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'Death Certificate',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'Living Certificate',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'No Dues Certificate',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'Old Age Certificate for Niradhar',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'Resident Certificate',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'Nuclear Family Certificate',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'Widow Certificate',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'Marriage Certificate',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'Toilet Certificate',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'DesertedCertificate',
                        icon: 'pi pi-fw pi-sign-in',
                    },
                    {
                        label: 'Assessment Certificate',
                        icon: 'pi pi-fw pi-sign-in',
                    }



                  ]},

                    { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
                    { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
                    { label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
                    { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                    { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                    { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                    { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                    { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                    { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
                    { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
                    { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
                    { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
                    { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
                    { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
                ]
            },
            {
                label: 'Prime Blocks',
                items: [
                    { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
                    { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
                ]
            },
            {
                label: 'Utilities',
                items: [
                    { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
                    { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/landing']
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud']
                    },
                    {
                        label: 'Timeline',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/pages/timeline']
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/notfound']
                    },
                    {
                        label: 'Empty',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/pages/empty']
                    },
                ]
            },
            {
                label: 'Hierarchy',
                items: [
                    {
                        label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                label: 'Get Started',
                items: [
                    {
                        label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/documentation']
                    },
                    {
                        label: 'View Source', icon: 'pi pi-fw pi-search', url: ['https://github.com/primefaces/sakai-ng'], target: '_blank'
                    }
                ]
            }
        ];
    }
}
