export const datacode = [
    {
        title: '插值表达式（interpolation）',
        code: `
<h1>{{title}}</h1>
<h2>My favorite hero is: {{myHero}}</h2>
        `
    }, {
        title: '内联模板和模板文件',
        code: `
//内联模板
@Component({
    selector: 'app-root',
    template: '<h1>{{title}}</h1>'
})
//模板文件
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
        `
    }, {
        title: '构造函数和变量初始化',
        code: `
//变量初始化
export class AppComponent {
    title = 'Tour of Heroes';
    myHero = 'Windstorm';
}
//构造函数
export class AppCtorComponent {
    title: string;

    constructor() {
      this.title = 'Tour of Heroes';
    }
}
        `
    }
];
