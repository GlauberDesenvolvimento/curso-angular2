webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-primary navbar-contatos\">\n  <div class=\"container\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n        <a class=\"nav-link\" routerLink=\"/contatos\" >Contatos</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n        <a class=\"nav-link\" routerLink=\"/contatos/save\">Novo</a>\n      </li>\n    </ul>\n    <contato-busca></contato-busca>\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 app-component\">\n      <h2>\n        SPA {{ title }}!\n      </h2>\n      <hr>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".navbar-contatos .navbar-nav {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-direction: row !important;\n          flex-direction: row !important; }\n  .navbar-contatos .navbar-nav a {\n    padding-right: .5rem;\n    padding-left: .5rem; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Contatos Lista';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-component',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routing_module__ = __webpack_require__("./src/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contatos_contatos_module__ = __webpack_require__("./src/app/contatos/contatos.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_in_memory_web_api__ = __webpack_require__("./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inMemoryData_service__ = __webpack_require__("./src/app/inMemoryData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contatos_busca_contato_busca_component__ = __webpack_require__("./src/app/contatos/busca/contato-busca.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__contatos_busca_contato_busca_component__["a" /* ContatoBuscaComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__contatos_contatos_module__["a" /* ContatosModule */],
                __WEBPACK_IMPORTED_MODULE_3__routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__inMemoryData_service__["a" /* InMemoryDataService */])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contatos/busca/contato-busca.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline my-2 my-lg-0 contatos-busca\">\n  <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Digite aqui\" maxlength=\"23\" #t (keyup)=\"search(t.value, $event)\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let c of contatos | async\">\n      <a href=\"#\" (click)=\"verDetalhe(c, $event)\">{{c.nome}}</a>\n    </li>\n  </ul>\n  <!-- <button type=\"submit\" class=\"btn btn-outline-light my-2 my-sm-0\" type=\"button\">Buscar</button> -->\n</form>\n\n"

/***/ }),

/***/ "./src/app/contatos/busca/contato-busca.component.scss":
/***/ (function(module, exports) {

module.exports = ".contatos-busca {\n  position: relative; }\n  .contatos-busca input {\n    max-width: 13em;\n    min-width: 7em; }\n  .contatos-busca .list-group {\n    display: none;\n    position: absolute;\n    left: 0;\n    top: 2.2em;\n    padding-top: 0.7em; }\n  .contatos-busca .list-group .contatos-busca {\n      display: none; }\n  .contatos-busca .list-group-item {\n    padding: .5rem 0.75rem; }\n  .contatos-busca a:hover {\n    text-decoration: none; }\n  .contatos-busca:hover .list-group {\n  display: inline-block; }\n"

/***/ }),

/***/ "./src/app/contatos/busca/contato-busca.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContatoBuscaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_contato_service__ = __webpack_require__("./src/app/contatos/services/contato.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContatoBuscaComponent = /** @class */ (function () {
    // private timeout;
    function ContatoBuscaComponent(contatoService, router) {
        this.contatoService = contatoService;
        this.router = router;
        this.termosDaBusca = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    ContatoBuscaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contatos = this.termosDaBusca
            .debounceTime(200) //Delay para chamada
            .distinctUntilChanged() //ignore se o próximo termo for igual ao anterior
            .switchMap(function (t) { return t ? _this.contatoService.search(t) : __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of([]); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of([]); });
        this.contatos.subscribe();
    };
    ContatoBuscaComponent.prototype.search = function (t, event) {
        var codes = new Array(37, 38, 39, 40); //setas
        if (codes.includes(event.keyCode)) {
            return;
        }
        if (t.length > 2 && t.length < 24) {
            // if(this.timeout){
            //   clearTimeout(this.timeout);
            // }
            // this.timeout = setTimeout(()=>{ this.termosDaBusca.next(t); }, 200);
            this.termosDaBusca.next(t);
        }
    };
    ContatoBuscaComponent.prototype.verDetalhe = function (contato, event) {
        event.preventDefault();
        var link = ['contatos/save', contato.id];
        this.router.navigate(link);
    };
    ContatoBuscaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'contato-busca',
            template: __webpack_require__("./src/app/contatos/busca/contato-busca.component.html"),
            styles: [__webpack_require__("./src/app/contatos/busca/contato-busca.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_contato_service__["a" /* ContatoService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ContatoBuscaComponent);
    return ContatoBuscaComponent;
}());



/***/ }),

/***/ "./src/app/contatos/contatos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 meus-contatos\">\n    <h4>Meus Contatos</h4>\n\n    <div [ngClass]=\"classesCss\" role=\"alert\" *ngIf=\"mensagem\">\n      <span [ngSwitch]=\"mensagem.tipo\">\n        <strong *ngSwitchCase=\"danger\">Erro!</strong>\n        <strong *ngSwitchCase=\"warning\">Alerta!</strong>\n        <strong *ngSwitchCase=\"success\">Sucesso!</strong>\n        <strong *ngSwitchDefault>Informação</strong>\n      </span>\n      {{mensagem.texto}}\n    </div>\n\n    <table class=\"table table-striped table-hover\">\n      <thead>\n        <tr>\n          <th>Nome</th>\n          <th>E-mail</th>\n          <th>Telefone</th>\n          <th>Deletar</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td colspan=\"4\" align=\"center\" *ngIf=\"contatos.length == 0\">Nenhum registro carregado.</td>\n        </tr>\n        <tr *ngFor=\"let c of contatos\">\n          <td>{{c.nome}}</td>\n          <td>{{c.email}}</td>\n          <td>{{c.telefone}}</td>\n          <td>\n            <button class=\"btn btn-info btn-sm\" [routerLink]=\"['/contatos/save', c.id]\">Editar</button>\n            <button class=\"btn btn-danger btn-sm\" (click)=\"onDelete(c)\">Detetar</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contatos/contatos.component.scss":
/***/ (function(module, exports) {

module.exports = ".meus-contatos .btn-sm {\n  line-height: 1; }\n"

/***/ }),

/***/ "./src/app/contatos/contatos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContatosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_contato_service__ = __webpack_require__("./src/app/contatos/services/contato.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContatosComponent = /** @class */ (function () {
    function ContatosComponent(contatoService) {
        this.contatos = [];
        this.contatoService = contatoService;
    }
    ContatosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contatoService.getContatos().then(function (contatos) {
            _this.contatos = contatos;
        }).catch(function (err) {
            console.log("Aconteceu um erro", err);
            _this.mostrarMensagem({
                tipo: "danger",
                texto: "Ocorreu um erro ao buscar a lista"
            });
        });
    };
    ContatosComponent.prototype.onDelete = function (contato) {
        var _this = this;
        this.confirm('Deseja deletar o contato: ' + contato.nome)
            .then(function (canDelete) {
            if (canDelete) {
                _this.contatoService
                    .delete(contato)
                    .then(function (c) {
                    _this.contatos = _this.contatos.filter(function (c) { return c.id != contato.id; });
                    _this.mostrarMensagem({
                        tipo: "success",
                        texto: "Contato deletado"
                    });
                }).catch(function (err) {
                    console.log(err);
                    _this.mostrarMensagem({
                        tipo: "danger",
                        texto: "Ocorreu um erro"
                    });
                });
            }
        });
    };
    ContatosComponent.prototype.mostrarMensagem = function (mensagem) {
        var _this = this;
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);
        if (mensagem.tipo != "danger") {
            if (this.currentTimeout) {
                clearTimeout(this.currentTimeout);
            }
            this.currentTimeout = setTimeout(function () {
                _this.mensagem = undefined;
            }, 3000);
        }
    };
    ContatosComponent.prototype.montarClasses = function (tipo) {
        this.classesCss = {
            'alert': true
        };
        this.classesCss['alert-' + tipo] = true; //alert-
        /**
         * {
         * 'alert': true,
         * 'alert-success': true,
         * 'alert-danger': true,
         * }
         */
    };
    ContatosComponent.prototype.confirm = function (message) {
        return new Promise(function (resolve) {
            return resolve(window.confirm(message || 'Confirmar'));
        });
    };
    ContatosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'contatos',
            template: __webpack_require__("./src/app/contatos/contatos.component.html"),
            styles: [__webpack_require__("./src/app/contatos/contatos.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_contato_service__["a" /* ContatoService */]])
    ], ContatosComponent);
    return ContatosComponent;
}());



/***/ }),

/***/ "./src/app/contatos/contatos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContatosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contatos_component__ = __webpack_require__("./src/app/contatos/contatos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__save_contato_detalhe_component__ = __webpack_require__("./src/app/contatos/save/contato-detalhe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contatos_routing_module__ = __webpack_require__("./src/app/contatos/contatos.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_contato_service__ = __webpack_require__("./src/app/contatos/services/contato.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ContatosModule = /** @class */ (function () {
    function ContatosModule() {
    }
    ContatosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__contatos_routing_module__["a" /* ContatoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__contatos_component__["a" /* ContatosComponent */],
                __WEBPACK_IMPORTED_MODULE_3__save_contato_detalhe_component__["a" /* ContatoDetalheComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contatos_component__["a" /* ContatosComponent */],
                __WEBPACK_IMPORTED_MODULE_3__save_contato_detalhe_component__["a" /* ContatoDetalheComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_contato_service__["a" /* ContatoService */]
            ]
        })
    ], ContatosModule);
    return ContatosModule;
}());



/***/ }),

/***/ "./src/app/contatos/contatos.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContatoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contatos_component__ = __webpack_require__("./src/app/contatos/contatos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__save_contato_detalhe_component__ = __webpack_require__("./src/app/contatos/save/contato-detalhe.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var contatoRoutes = [
    {
        path: 'contatos',
        component: __WEBPACK_IMPORTED_MODULE_2__contatos_component__["a" /* ContatosComponent */]
    },
    {
        path: 'contatos/save',
        component: __WEBPACK_IMPORTED_MODULE_3__save_contato_detalhe_component__["a" /* ContatoDetalheComponent */]
    },
    {
        path: 'contatos/save/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__save_contato_detalhe_component__["a" /* ContatoDetalheComponent */]
    }
];
var ContatoRoutingModule = /** @class */ (function () {
    function ContatoRoutingModule() {
    }
    ContatoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(contatoRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ],
            declarations: []
        })
    ], ContatoRoutingModule);
    return ContatoRoutingModule;
}());



/***/ }),

/***/ "./src/app/contatos/save/contato-detalhe.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 contatos-detalhe\">\n    <h4>Salvar Contato</h4>\n    <hr>\n    <form action=\"\" #formContato=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"nome\" class=\"for-control-label\">Nome</label><br>\n        <input type=\"text\" class=\"form-control form-control-danger\" id=\"nome\" name=\"nome\" #nome=\"ngModel\" required [(ngModel)]=\"contato.nome\"/>\n        <small class=\"form-text text-danger\" [hidden]=\"nome.valid || nome.pristine\">\n          Este campo é obrigatório\n        </small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label><br>\n        <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" #email=\"ngModel\" required [(ngModel)]=\"contato.email\"/>\n        <small class=\"form-text text-danger\" [hidden]=\"email.valid || email.pristine\">\n          Este campo é obrigatório\n        </small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"telefone\">Telefone</label><br>\n        <input type=\"tel\" class=\"form-control\" id=\"telefone\" name=\"telefone\" #telefone=\"ngModel\" required [(ngModel)]=\"contato.telefone\"/>\n        <small class=\"form-text text-danger\" [hidden]=\"telefone.valid || telefone.pristine\">\n          Este campo é obrigatório\n        </small>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success btn-sm\" [disabled]=\"!formContato.form.valid\">Salvar</button>\n      <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"voltar()\">Voltar</button>\n      <!-- <button type=\"button\" class=\"btn btn-warn btn-sm\" (click)=\"log(formContato)\">Log do objeto ngForm</button> -->\n    </form>\n    <br>\n    <!-- <pre><code>{{ contato | json }}</code></pre> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contatos/save/contato-detalhe.component.scss":
/***/ (function(module, exports) {

module.exports = ".contatos-detalhe .form-group {\n  position: relative;\n  line-height: 0.5; }\n\n.contatos-detalhe .btn-sm {\n  line-height: 1.5; }\n\n.contatos-detalhe .ng-valid[required] {\n  border: 1px solid green; }\n\n.contatos-detalhe .ng-invalid.ng-touched:not(form) {\n  border: 1px solid red; }\n\n.contatos-detalhe .text-danger {\n  font-size: 0.72em;\n  position: absolute;\n  top: 5em;\n  right: 0; }\n"

/***/ }),

/***/ "./src/app/contatos/save/contato-detalhe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContatoDetalheComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_contato_service__ = __webpack_require__("./src/app/contatos/services/contato.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_contato_model__ = __webpack_require__("./src/app/contatos/services/contato.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContatoDetalheComponent = /** @class */ (function () {
    function ContatoDetalheComponent(contatoService, route, location) {
        var _this = this;
        this.contato = new __WEBPACK_IMPORTED_MODULE_4__services_contato_model__["a" /* Contato */](0, '', '', '');
        this.contatoService = contatoService;
        this.route = route;
        this.location = location;
        this.contatoService.getNextId().then(function (nextId) {
            _this.contato = new __WEBPACK_IMPORTED_MODULE_4__services_contato_model__["a" /* Contato */](nextId, '', '', '');
        });
    }
    ContatoDetalheComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            if (id) {
                _this.isNew = false;
                _this.contatoService.getContato(id).then(function (contato) {
                    _this.contato = contato;
                    // console.log(contato);
                    // console.log(this.contato);
                });
            }
            else {
                _this.isNew = true;
            }
        });
    };
    ContatoDetalheComponent.prototype.onSubmit = function () {
        var _this = this;
        var promise;
        if (this.isNew) {
            promise = this.contatoService.create(this.contato);
        }
        else {
            promise = this.contatoService.update(this.contato);
        }
        promise.then(function () { _this.location.back(); });
    };
    ContatoDetalheComponent.prototype.log = function (form) {
        console.log(form);
    };
    ContatoDetalheComponent.prototype.voltar = function () {
        this.location.back();
    };
    ContatoDetalheComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'contato-detalhe',
            template: __webpack_require__("./src/app/contatos/save/contato-detalhe.component.html"),
            styles: [__webpack_require__("./src/app/contatos/save/contato-detalhe.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_contato_service__["a" /* ContatoService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], ContatoDetalheComponent);
    return ContatoDetalheComponent;
}());



/***/ }),

/***/ "./src/app/contatos/services/contato.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contato; });
var Contato = /** @class */ (function () {
    function Contato(id, nome, email, telefone) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
    return Contato;
}());



/***/ }),

/***/ "./src/app/contatos/services/contato.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContatoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContatoService = /** @class */ (function () {
    function ContatoService(http) {
        this.http = http;
        this.contatosUrl = 'app/contatos';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ContatoService.prototype.handleError = function (err) {
        console.log('Error.', err);
        return Promise.reject(err.message || err);
    };
    ContatoService.prototype.getContatos = function () {
        return this.http.get(this.contatosUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        // return Promise.resolve(CONTATOS);
    };
    ContatoService.prototype.getNextId = function () {
        return this.http.get(this.contatosUrl)
            .toPromise()
            .then(function (response) {
            var contatos = response.json();
            var ids = contatos.map(function (c) { return c.id; });
            var max = 0;
            for (var i = 0; i < ids.length; i++) {
                if (ids[i] > max) {
                    max = ids[i];
                }
            }
            return contatos.length ? max + 1 : 1;
        })
            .catch(this.handleError);
        // return Promise.resolve(CONTATOS);
    };
    ContatoService.prototype.create = function (contato) {
        return this.http
            .post(this.contatosUrl, JSON.stringify(contato), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ContatoService.prototype.update = function (contato) {
        return this.http
            .put(this.contatosUrl + "/" + contato.id, JSON.stringify(contato), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ContatoService.prototype.delete = function (contato) {
        return this.http
            .delete(this.contatosUrl + "/" + contato.id, { headers: this.headers })
            .toPromise()
            .then(function () { return contato; })
            .catch(this.handleError);
    };
    ContatoService.prototype.getContato = function (id) {
        return this.getContatos().then(function (contatos) { return contatos.find(function (c) { return c.id === id; }); });
    };
    ContatoService.prototype.getContatosSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(resolve, 1000);
        }).then(function () {
            console.log("Primeiro Then");
            return "Curso Angular 2";
        }).then(function (param) {
            console.log("Segundo Then.\nRetorno: " + param);
        }).then(function () { return _this.getContatos(); });
    };
    ContatoService.prototype.search = function (term) {
        return this.http
            .get(this.contatosUrl + "/?nome=" + term)
            .map(function (res) { return res.json(); });
    };
    ContatoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], ContatoService);
    return ContatoService;
}());



/***/ }),

/***/ "./src/app/contatos/services/contatos.mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONTATOS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contato_model__ = __webpack_require__("./src/app/contatos/services/contato.model.ts");

var c1 = new __WEBPACK_IMPORTED_MODULE_0__contato_model__["a" /* Contato */](1, 'Fulano', 'fulano@gmail.com', '(61) 99999-9999');
var c2 = new __WEBPACK_IMPORTED_MODULE_0__contato_model__["a" /* Contato */](2, 'Ciclano', 'ciclano@gmail.com', '(61) 99999-9999');
var c3 = new __WEBPACK_IMPORTED_MODULE_0__contato_model__["a" /* Contato */](3, 'Beltrano', 'beltrano@gmail.com', '(61) 99999-9999');
var CONTATOS = [c1, c2, c3];


/***/ }),

/***/ "./src/app/inMemoryData.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contatos_services_contatos_mock__ = __webpack_require__("./src/app/contatos/services/contatos.mock.ts");

var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var contatos = __WEBPACK_IMPORTED_MODULE_0__contatos_services_contatos_mock__["a" /* CONTATOS */];
        return { contatos: contatos };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var appRoutes = [{
        path: '',
        redirectTo: 'contatos',
        pathMatch: 'full'
    }];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ],
            declarations: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: "url dev"
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map