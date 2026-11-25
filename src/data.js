export const seedUsers=[
{id:'user-demo',name:'Alex Morgan',email:'user@budgetwise.demo',password:'user123',role:'user',active:true,joined:'2026-09-12'},
{id:'admin-demo',name:'Jordan Lee',email:'admin@budgetwise.demo',password:'admin123',role:'admin',active:true,joined:'2026-08-02'},
{id:'ceo-demo',name:'Taylor Smith',email:'ceo@budgetwise.demo',password:'ceo123',role:'head-admin',active:true,joined:'2026-07-01'}
];
export const seedTransactions=[
{id:'t1',userId:'user-demo',title:'Monthly salary',category:'Salary',type:'income',amount:52000,date:'2026-11-01',note:'November salary'},
{id:'t2',userId:'user-demo',title:'Apartment rent',category:'Housing',type:'expense',amount:14500,date:'2026-11-03',note:''},
{id:'t3',userId:'user-demo',title:'Groceries',category:'Food',type:'expense',amount:3200,date:'2026-11-06',note:''},
{id:'t4',userId:'user-demo',title:'Freelance project',category:'Side income',type:'income',amount:8500,date:'2026-11-09',note:''},
{id:'t5',userId:'user-demo',title:'Electricity bill',category:'Utilities',type:'expense',amount:1650,date:'2026-11-11',note:''},
{id:'t6',userId:'user-demo',title:'Transport',category:'Transport',type:'expense',amount:1100,date:'2026-11-15',note:''},
{id:'t7',userId:'user-demo',title:'Coffee & dining',category:'Food',type:'expense',amount:980,date:'2026-11-17',note:''},
{id:'t8',userId:'user-demo',title:'Streaming subscription',category:'Entertainment',type:'expense',amount:499,date:'2026-11-20',note:''}
];
export const seedBudgets=[
{id:'b1',userId:'user-demo',category:'Food',limit:7000},{id:'b2',userId:'user-demo',category:'Housing',limit:16000},{id:'b3',userId:'user-demo',category:'Transport',limit:3000},{id:'b4',userId:'user-demo',category:'Entertainment',limit:2000},{id:'b5',userId:'user-demo',category:'Utilities',limit:2500}
];
export const seedGoals=[
{id:'g1',userId:'user-demo',title:'Emergency fund',target:100000,saved:42000,due:'2027-06-30'},{id:'g2',userId:'user-demo',title:'New laptop',target:75000,saved:28000,due:'2027-03-31'}
];
