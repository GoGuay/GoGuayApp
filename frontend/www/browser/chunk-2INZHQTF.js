import {
  FuncionesUsuario
} from "./chunk-KJYZQWDC.js";
import {
  SelectorGeneralComponent
} from "./chunk-KKT6E5SK.js";
import {
  MatFormFieldModule
} from "./chunk-XVWMHNVH.js";
import {
  FuncionesComunes,
  VehiculosServicesService
} from "./chunk-JVMVG56Z.js";
import {
  MessageService
} from "./chunk-AF4L5EWO.js";
import {
  UserServicesService
} from "./chunk-YZOGC4HD.js";
import {
  MatIcon
} from "./chunk-H72L7N4J.js";
import {
  IonItem,
  IonLabel,
  IonList,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonicModule,
  SelectValueAccessorDirective
} from "./chunk-6IWXE3BU.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-XHXT42RH.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-TU2LK3TM.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-7PPOBOFB.js";
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HLETIGG3.js";

// src/app/models/vehiculos/marcas_modelos.model.ts
var COLORES = [
  "blanco",
  "negro",
  "rojo",
  "amarillo",
  "verde",
  "gris",
  "dorado",
  "marron",
  "morado",
  "beige",
  "perla",
  "otro"
];
var COLOURS = [
  "white",
  "black",
  "red",
  "yellow",
  "green",
  "gray",
  "gold",
  "brown",
  "purple",
  "beige",
  "pearl",
  "perla",
  "other"
];
var CARS = [
  {
    marca: "Alfa-Romeo",
    modelos: [
      "Giulietta",
      "MiTo",
      "Junior Elettrica",
      "4C",
      "Tonale",
      "Giulia",
      "Stelvia",
      "Otro modelo"
    ]
  },
  {
    marca: "Seat",
    modelos: [
      "Alhambra",
      "Arona",
      "Ateca",
      "Ibiza",
      "Leon",
      "MII",
      "Nuevo-Le\xF3n",
      "M\xF3",
      "Terraco",
      "Toledo",
      "Otro modelo"
    ]
  },
  {
    marca: "Citroen",
    modelos: [
      "C5",
      "AMI",
      "Berlingo",
      "C-Elys\xE9e",
      "C-Zero",
      "C1",
      "C3",
      "C3 AirCross",
      "C4",
      "C4 Cactus",
      "C4X",
      "C5 Aircross",
      "C5-X",
      "Grand c4 Space Tourer",
      "Jumpy",
      "SpaceTourer",
      "SUV C5 Aircross Hybrid",
      "Otro modelo"
    ]
  },
  {
    marca: "Cupra",
    modelos: [
      "Ateca",
      "Born",
      "Formentor",
      "Le\xF3n",
      "Tavascar",
      "Terramar",
      "Otro modelo"
    ]
  },
  {
    marca: "Dacia",
    modelos: [
      "Dokker",
      "Duster",
      "Lodgy",
      "Bigster",
      "Jogger",
      "Logan",
      "Sandero",
      "Spring",
      "Otro modelo"
    ]
  },
  {
    marca: "Fiat",
    modelos: [
      "500",
      "501",
      "502",
      "Dobl\xF2",
      "Ducato",
      "Fiorino",
      "Panda-Van",
      "Qubo",
      "Squdo",
      "Talento",
      "Tipo",
      "Topolino",
      "Otro modelo"
    ]
  },
  {
    marca: "Volkswagen",
    modelos: [
      "Arteon",
      "Golf",
      "Multivan",
      "Passat",
      "Polo",
      "Taigo",
      "Tiguan",
      "T-Cross",
      "T-Roc",
      "Tuareg",
      "Touran",
      "Otro modelo"
    ]
  },
  {
    marca: "Renault",
    modelos: [
      "Arkana",
      "Austral",
      "Captur",
      "Clio",
      "Espace",
      "Gran-Scenic",
      "Kadjar",
      "Kangoo",
      "Megane",
      "Trafic",
      "Twingo",
      "Zoe",
      "Otro modelo"
    ]
  },
  {
    marca: "Peugeot",
    modelos: [
      "108",
      "208",
      "308",
      "408",
      "508",
      "2008",
      "3008",
      "5008",
      "Boxer",
      "Expert",
      "Traveller",
      "Rifter",
      "Partner",
      "Otro modelo"
    ]
  },
  {
    marca: "Ford",
    modelos: [
      "Capri",
      "Edge",
      "E-Transit",
      "Ecosport",
      "Explorer",
      "Fiesta",
      "Focus",
      "Kuga",
      "Mustang",
      "Puma",
      "Mondeo",
      "Tourneo",
      "Otro modelo"
    ]
  },
  {
    marca: "Toyota",
    modelos: [
      "Auris",
      "Aygo",
      "Corolla",
      "Highlander",
      "Hilux",
      "Land Cruiser",
      "Mirai",
      "Prius",
      "Proace",
      "RAV4",
      "Yaris",
      "Otro modelo"
    ]
  },
  {
    marca: "BMW",
    modelos: [
      "Serie 1",
      "Serie 2",
      "Serie 3",
      "Serie 4",
      "Serie 5",
      "Serie 7",
      "I",
      "M",
      "X",
      "Z",
      "Otro modelo"
    ]
  },
  {
    marca: "Audi",
    modelos: [
      "A1",
      "A3",
      "A4",
      "A5",
      "A6",
      "A7",
      "A8",
      "Q2",
      "Q3",
      "Q4",
      "Q5",
      "S5",
      "Q7",
      "Q8",
      "R8-Coup\xE9",
      "R8-Spyder",
      "RS-3",
      "RS-4",
      "RS-5",
      "RS-6",
      "RS-7",
      "RS-Q3",
      "RS-Q8",
      "S3",
      "S4",
      "S5",
      "S6",
      "S7",
      "S8",
      "TT-Coup\xE9",
      "TT-Roadster",
      "Otro modelo"
    ]
  },
  {
    marca: "Mercedes",
    modelos: [
      "A-Class",
      "B-Class",
      "C-Class",
      "E-Class",
      "G-Class",
      "S-Class",
      "T-Class",
      "V-Class",
      "CLE",
      "EQA",
      "EQS",
      "EQV",
      "eCitan",
      "eSprinter",
      "GLA",
      "GLC",
      "GLE",
      "GLS",
      "Marco-Polo",
      "Vito",
      "Otro modelo"
    ]
  },
  {
    marca: "Honda",
    modelos: [
      "CIVIC",
      "CR-V",
      "e:Ny1",
      "HONDA",
      "HR-V",
      "JAZZ",
      "ZR-V",
      "Otro modelo"
    ]
  },
  {
    marca: "Hyundai",
    modelos: [
      "Bayon",
      "i10",
      "i20",
      "i30",
      "Inster",
      "Ionic",
      "Kona",
      "Nexo",
      "Santa Fe",
      "Staria",
      "Tucson",
      "Otro modelo"
    ]
  },
  {
    marca: "Kia",
    modelos: [
      "Ceed",
      "EV-3",
      "EV-6",
      "EV-9",
      "e-Soul",
      "Niro",
      "Picanto",
      "Proceed",
      "Rio",
      "Sorento",
      "Sportage",
      "Stinger",
      "Stonic",
      "XCEED",
      "Otro modelo"
    ]
  },
  {
    marca: "Land-Rover",
    modelos: ["Discovery", "Range", "Otro modelo"]
  },
  {
    marca: "Lexus",
    modelos: [
      "CT 200h",
      "ES 300h",
      "IS 300h",
      "LBX",
      "LC 500",
      "LC CV",
      "LM 350h",
      "LS 500h",
      "NX 300h",
      "NX 350",
      "NX 450",
      "RC 300h",
      "RC F",
      "RX 350h",
      "RX 450h",
      "RX 500h",
      "RZ 300e",
      "RZ 450e",
      "UX 250h",
      "UX 300E",
      "UX 300h",
      "Otro modelo"
    ]
  },
  {
    marca: "Mazda",
    modelos: [
      "Mazda2",
      "Mazda3",
      "Mazda6",
      "CX-3",
      "CX-30",
      "CX-5",
      "CX-60",
      "CX-80",
      "MX-5",
      "MX-30",
      "Otro modelo"
    ]
  },
  {
    marca: "Nissan",
    modelos: [
      "370Z",
      "ARIYA",
      "eNV200",
      "GT-R",
      "JUKE",
      "LEAF",
      "Micra",
      "Nuevo Ayira",
      "Nuevo Qashqai",
      "Nuevo X-Trail",
      "NV250",
      "NV300",
      "NV400",
      "Primastar",
      "Qashqai",
      "TOWNSTAR",
      "X-Trail",
      "Otro modelo"
    ]
  },
  {
    marca: "Opel",
    modelos: [
      "Astra",
      "Combo",
      "Corsa",
      "Crossland",
      "Insignia",
      "Moka",
      "Movano",
      "Vivar",
      "Zafira",
      "Otro modelo"
    ]
  },
  {
    marca: "Otra",
    modelos: ["Otro"]
  }
];

// src/app/components/tabla-vehiculos/vista-tabla-vehiculos/tabla-vehiculos.component.ts
var _c0 = (a0) => ({ color: a0 });
var _c1 = (a0, a1, a2) => ({ marca: a0, modelo: a1, color: a2 });
function TablaVehiculosComponent_ng_container_6_ng_container_1_ion_item_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 19);
    \u0275\u0275listener("click", function TablaVehiculosComponent_ng_container_6_ng_container_1_ion_item_3_Template_ion_item_click_0_listener() {
      const coche_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.seleccionarCoche(coche_r4));
    });
    \u0275\u0275elementStart(1, "ion-label", 20)(2, "div", 21);
    \u0275\u0275element(3, "img", 22);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "ion-radio", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const coche_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.isCocheSeleccionado(coche_r4));
    \u0275\u0275attribute("aria-checked", ctx_r1.isCocheSeleccionado(coche_r4));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.mostrarColorCoche(coche_r4.color), \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind2(4, 9, "TABLA_VEHICULOS.SELECTOR.COLOR_VEHICULO", \u0275\u0275pureFunction1(12, _c0, coche_r4.color)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", coche_r4.marca, " ", coche_r4.modelo);
    \u0275\u0275advance();
    \u0275\u0275property("value", coche_r4);
    \u0275\u0275attribute("aria-label", coche_r4.marca + " " + coche_r4.modelo + ", " + coche_r4.color);
  }
}
function TablaVehiculosComponent_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-list", 12)(2, "ion-radio-group", 13);
    \u0275\u0275twoWayListener("ngModelChange", function TablaVehiculosComponent_ng_container_6_ng_container_1_Template_ion_radio_group_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.cocheSeleccionado, $event) || (ctx_r1.cocheSeleccionado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function TablaVehiculosComponent_ng_container_6_ng_container_1_Template_ion_radio_group_ionChange_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.seleccionarCoche(ctx_r1.cocheSeleccionado));
    });
    \u0275\u0275template(3, TablaVehiculosComponent_ng_container_6_ng_container_1_ion_item_3_Template, 8, 14, "ion-item", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 15)(5, "p", 16);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 17);
    \u0275\u0275listener("click", function TablaVehiculosComponent_ng_container_6_ng_container_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.irARegistrarVehiculo.emit());
    });
    \u0275\u0275element(9, "i", 18);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-labelledby", "titulo-vehiculos");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cocheSeleccionado);
    \u0275\u0275property("compareWith", ctx_r1.compareVehiculos);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.vehiculos)("ngForTrackBy", ctx_r1.trackByVehiculo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, "TABLA_VEHICULOS.ANADIR_OTRO"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 9, "BOTONES.TABLAVEHICULOS.ANADIR_VEHICULO"), " ");
  }
}
function TablaVehiculosComponent_ng_container_6_ng_template_2_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 30)(1, "ion-label", 20)(2, "div", 21);
    \u0275\u0275element(3, "img", 22);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 31)(8, "button", 32);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("click", function TablaVehiculosComponent_ng_container_6_ng_template_2_ion_item_1_Template_button_click_8_listener($event) {
      const coche_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.editarFilaVehiculo(coche_r6);
      ctx_r1.editarVehiculo.emit(coche_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(10, "mat-icon", 33);
    \u0275\u0275text(11, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 32);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("click", function TablaVehiculosComponent_ng_container_6_ng_template_2_ion_item_1_Template_button_click_12_listener($event) {
      const coche_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.eliminarVehiculo.emit(coche_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(14, "mat-icon", 33);
    \u0275\u0275text(15, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const coche_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.mostrarColorCoche(coche_r6.color), \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind2(4, 6, "TABLA_VEHICULOS.SELECTOR.COLOR", \u0275\u0275pureFunction1(15, _c0, coche_r6.color)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", coche_r6.marca, " ", coche_r6.modelo);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(9, 9, "BOTONES.TABLAVEHICULOS.EDITAR_ARIALABEL", \u0275\u0275pureFunction3(17, _c1, coche_r6.marca, coche_r6.modelo, coche_r6.color)));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(13, 12, "BOTONES.TABLAVEHICULOS.ELIMINAR_ARIALABEL", \u0275\u0275pureFunction3(21, _c1, coche_r6.marca, coche_r6.modelo, coche_r6.color)));
  }
}
function TablaVehiculosComponent_ng_container_6_ng_template_2_div_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-selector-general", 39);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("seleccionCambiada", function TablaVehiculosComponent_ng_container_6_ng_template_2_div_3_ng_container_3_Template_app_selector_general_seleccionCambiada_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onMarcaChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("opciones", ctx_r1.marcasParaSelector)("valor", ctx_r1.marcaSeleccionada)("ariaLabel", \u0275\u0275pipeBind1(2, 4, "TABLA_VEHICULOS.SELECTOR.MARCA"))("soloLectura", true);
  }
}
function TablaVehiculosComponent_ng_container_6_ng_template_2_div_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const coche_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(coche_r9.marca);
  }
}
function TablaVehiculosComponent_ng_container_6_ng_template_2_div_3_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-selector-general", 40);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("seleccionCambiada", function TablaVehiculosComponent_ng_container_6_ng_template_2_div_3_ng_container_7_Template_app_selector_general_seleccionCambiada_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onModeloChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("opciones", ctx_r1.modelosFiltrados)("valor", ctx_r1.modeloSeleccionado)("ariaLabel", \u0275\u0275pipeBind1(2, 4, "TABLA_VEHICULOS.SELECTOR.MODELO"))("soloLectura", true);
  }
}
function TablaVehiculosComponent_ng_container_6_ng_template_2_div_3_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const coche_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(coche_r9.modelo);
  }
}
function TablaVehiculosComponent_ng_container_6_ng_template_2_div_3_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-selector-general", 41);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("seleccionCambiada", function TablaVehiculosComponent_ng_container_6_ng_template_2_div_3_ng_container_11_Template_app_selector_general_seleccionCambiada_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onColorChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("opciones", ctx_r1.listadoColoresUnico)("valor", ctx_r1.colorSeleccionado)("ariaLabel", \u0275\u0275pipeBind1(2, 4, "TABLA_VEHICULOS.SELECTOR.COLOR"))("soloLectura", true);
  }
}
function TablaVehiculosComponent_ng_container_6_ng_template_2_div_3_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const coche_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.mostrarColorCoche(coche_r9.color), \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind2(1, 2, "TABLA_VEHICULOS.SELECTOR.COLOR_VEHICULO", \u0275\u0275pureFunction1(5, _c0, coche_r9.color)));
  }
}
function TablaVehiculosComponent_ng_container_6_ng_template_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div", 36);
    \u0275\u0275template(3, TablaVehiculosComponent_ng_container_6_ng_template_2_div_3_ng_container_3_Template, 3, 6, "ng-container", 9)(4, TablaVehiculosComponent_ng_container_6_ng_template_2_div_3_ng_template_4_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 36);
    \u0275\u0275template(7, TablaVehiculosComponent_ng_container_6_ng_template_2_div_3_ng_container_7_Template, 3, 6, "ng-container", 9)(8, TablaVehiculosComponent_ng_container_6_ng_template_2_div_3_ng_template_8_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 37);
    \u0275\u0275template(11, TablaVehiculosComponent_ng_container_6_ng_template_2_div_3_ng_container_11_Template, 3, 6, "ng-container", 9)(12, TablaVehiculosComponent_ng_container_6_ng_template_2_div_3_ng_template_12_Template, 2, 7, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 38)(15, "button", 32);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("click", function TablaVehiculosComponent_ng_container_6_ng_template_2_div_3_Template_button_click_15_listener() {
      const coche_r9 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(coche_r9.editandoVehiculo ? ctx_r1.guardarVehiculoEditado(coche_r9) : ctx_r1.editarFilaVehiculo(coche_r9));
    });
    \u0275\u0275elementStart(17, "mat-icon", 33);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 32);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275listener("click", function TablaVehiculosComponent_ng_container_6_ng_template_2_div_3_Template_button_click_19_listener($event) {
      const coche_r9 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.eliminarVehiculo.emit(coche_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(21, "mat-icon", 33);
    \u0275\u0275text(22, "delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const coche_r9 = ctx.$implicit;
    const marcaTexto_r12 = \u0275\u0275reference(5);
    const modeloTexto_r13 = \u0275\u0275reference(9);
    const colorImagen_r14 = \u0275\u0275reference(13);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", coche_r9.editandoVehiculo)("ngIfElse", marcaTexto_r12);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", coche_r9.editandoVehiculo)("ngIfElse", modeloTexto_r13);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", coche_r9.editandoVehiculo)("ngIfElse", colorImagen_r14);
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(16, 9, coche_r9.editandoVehiculo ? "BOTONES.TABLAVEHICULOS.GUARDAR_TRAS_EDITAR_ARIALABEL" : "BOTONES.TABLAVEHICULOS.EDITAR_ARIALABEL", \u0275\u0275pureFunction3(15, _c1, coche_r9.marca, coche_r9.modelo, coche_r9.color)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", coche_r9.editandoVehiculo ? "save" : "edit", " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(20, 12, "BOTONES.TABLAVEHICULOS.ELIMINAR_ARIALABEL", \u0275\u0275pureFunction3(19, _c1, coche_r9.marca, coche_r9.modelo, coche_r9.color)));
  }
}
function TablaVehiculosComponent_ng_container_6_ng_template_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "button", 17);
    \u0275\u0275listener("click", function TablaVehiculosComponent_ng_container_6_ng_template_2_div_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.irARegistrarVehiculo.emit());
    });
    \u0275\u0275element(2, "i", 18);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "BOTONES.TABLAVEHICULOS.ANADIR_VEHICULO"), " ");
  }
}
function TablaVehiculosComponent_ng_container_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 25);
    \u0275\u0275template(1, TablaVehiculosComponent_ng_container_6_ng_template_2_ion_item_1_Template, 16, 25, "ion-item", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 27);
    \u0275\u0275template(3, TablaVehiculosComponent_ng_container_6_ng_template_2_div_3_Template, 23, 23, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TablaVehiculosComponent_ng_container_6_ng_template_2_div_4_Template, 5, 3, "div", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.vehiculos)("ngForTrackBy", ctx_r1.trackByVehiculo);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.vehiculos);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.editandoCoche);
  }
}
function TablaVehiculosComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TablaVehiculosComponent_ng_container_6_ng_container_1_Template, 12, 11, "ng-container", 9)(2, TablaVehiculosComponent_ng_container_6_ng_template_2_Template, 5, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const modoPerfil_r16 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.modoSeleccion)("ngIfElse", modoPerfil_r16);
  }
}
function TablaVehiculosComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "p", 43);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 44)(5, "button", 17);
    \u0275\u0275listener("click", function TablaVehiculosComponent_ng_template_7_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.irARegistrarVehiculo.emit());
    });
    \u0275\u0275element(6, "i", 18);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "TABLA_VEHICULOS.SIN_VEHICULOS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "BOTONES.TABLAVEHICULOS.ANADIR_VEHICULO"), " ");
  }
}
function TablaVehiculosComponent_div_9_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "button", 52);
    \u0275\u0275listener("click", function TablaVehiculosComponent_div_9_div_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.guardarVehiculo());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 53);
    \u0275\u0275listener("click", function TablaVehiculosComponent_div_9_div_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelarCoche());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.marcaSeleccionada || !ctx_r1.modeloSeleccionado || !ctx_r1.colorSeleccionado);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "BOTONES.TABLAVEHICULOS.GUARDAR_VEHICULO"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "BOTONES.TABLAVEHICULOS.CANCELAR"), " ");
  }
}
function TablaVehiculosComponent_div_9_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 54)(2, "button", 52);
    \u0275\u0275listener("click", function TablaVehiculosComponent_div_9_div_16_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.guardarVehiculoEditado(ctx_r1.cocheEnEdicion));
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 55);
    \u0275\u0275listener("click", function TablaVehiculosComponent_div_9_div_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelarCoche());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.marcaSeleccionada || !ctx_r1.modeloSeleccionado || !ctx_r1.colorSeleccionado);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "BOTONES.TABLAVEHICULOS.GUARDAR_VEHICULO"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "BOTONES.TABLAVEHICULOS.CANCELAR"), " ");
  }
}
function TablaVehiculosComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46)(2, "div", 47);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "div", 48)(5, "div", 49)(6, "app-selector-general", 39);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("seleccionCambiada", function TablaVehiculosComponent_div_9_Template_app_selector_general_seleccionCambiada_6_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMarcaChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 49)(9, "app-selector-general", 40);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("seleccionCambiada", function TablaVehiculosComponent_div_9_Template_app_selector_general_seleccionCambiada_9_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onModeloChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 49)(12, "app-selector-general", 41);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("seleccionCambiada", function TablaVehiculosComponent_div_9_Template_app_selector_general_seleccionCambiada_12_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onColorChange($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "ion-row", 44);
    \u0275\u0275template(15, TablaVehiculosComponent_div_9_div_15_Template, 7, 7, "div", 50)(16, TablaVehiculosComponent_div_9_div_16_Template, 8, 7, "div", 50);
    \u0275\u0275element(17, "div", 51);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 15, "TABLA_VEHICULOS.TITULO"));
    \u0275\u0275advance(4);
    \u0275\u0275property("opciones", ctx_r1.marcasParaSelector)("valor", ctx_r1.marcaSeleccionada)("ariaLabel", \u0275\u0275pipeBind1(7, 17, "TABLA_VEHICULOS.SELECTOR.MARCA"))("soloLectura", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("opciones", ctx_r1.modelosFiltrados)("valor", ctx_r1.modeloSeleccionado)("ariaLabel", \u0275\u0275pipeBind1(10, 19, "TABLA_VEHICULOS.SELECTOR.MODELO"))("soloLectura", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("opciones", ctx_r1.listadoColoresUnico)("valor", ctx_r1.colorSeleccionado)("ariaLabel", \u0275\u0275pipeBind1(13, 21, "TABLA_VEHICULOS.SELECTOR.COLOR"))("soloLectura", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.editandoCoche);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editandoCoche);
  }
}
function TablaVehiculosComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "span", 44);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 57);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275element(6, "i", 58);
    \u0275\u0275text(7, " gestion.goguay@gmail.com ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "TABLA_VEHICULOS.INFO"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 4, "TABLA_VEHICULOS.ENVIAR_CORREO"));
  }
}
var TablaVehiculosComponent = class _TablaVehiculosComponent {
  funcionesComunes;
  funcionesUsuario;
  cdr;
  vehiculosServicesService;
  userService;
  messageService;
  translate;
  vehiculos = [];
  modoSeleccion = false;
  cocheSeleccionado = null;
  mostrarSelectorVehiculo = false;
  // Estados del formulario pasados o gestionados aquí
  marcaSeleccionada = "";
  modeloSeleccionado = "";
  colorSeleccionado = "";
  matriculaNoValida = false;
  // Outputs para notificar al componente padre
  cocheSeleccionadoChange = new EventEmitter();
  editarVehiculo = new EventEmitter();
  eliminarVehiculo = new EventEmitter();
  irARegistrarVehiculo = new EventEmitter();
  vehiculoAnadidoExito = new EventEmitter();
  mostrarSelectorVehiculoChange = new EventEmitter();
  userData = {};
  listColours = COLOURS;
  listadoCoches = CARS;
  modelosFiltrados = [];
  cocheEnEdicion = null;
  editandoCoche = false;
  marcasParaSelector = [];
  listadoColoresUnico = [
    { valor: "blanco", descripcion: "SELECTOR_COLOR.BLANCO" },
    { valor: "negro", descripcion: "SELECTOR_COLOR.NEGRO" },
    { valor: "rojo", descripcion: "SELECTOR_COLOR.ROJO" },
    { valor: "amarillo", descripcion: "SELECTOR_COLOR.AMARILLO" },
    { valor: "verde", descripcion: "SELECTOR_COLOR.VERDE" },
    { valor: "gris", descripcion: "SELECTOR_COLOR.GRIS" },
    { valor: "dorado", descripcion: "SELECTOR_COLOR.DORADO" },
    { valor: "marron", descripcion: "SELECTOR_COLOR.MARRON" },
    { valor: "morado", descripcion: "SELECTOR_COLOR.MORADO" },
    { valor: "beige", descripcion: "SELECTOR_COLOR.BEIGE" },
    { valor: "perla", descripcion: "SELECTOR_COLOR.PERLA" },
    { valor: "otro", descripcion: "SELECTOR_COLOR.OTRO" }
  ];
  constructor(funcionesComunes, funcionesUsuario, cdr, vehiculosServicesService, userService, messageService, translate) {
    this.funcionesComunes = funcionesComunes;
    this.funcionesUsuario = funcionesUsuario;
    this.cdr = cdr;
    this.vehiculosServicesService = vehiculosServicesService;
    this.userService = userService;
    this.messageService = messageService;
    this.translate = translate;
  }
  ngOnInit() {
    this.loadUserData();
    this.marcasParaSelector = this.listadoCoches.map((c) => c.marca);
  }
  loadUserData() {
    const data = localStorage.getItem("userData");
    if (data) {
      this.userData = JSON.parse(data);
    }
  }
  /**
   * Función para mostrar el color del coche seleccionado.
   * @param color --> Recibe el color del coche.
   * @returns Devuelve la ruta de la imagen del color del coche.
   */
  mostrarColorCoche(color) {
    const blanco = "../../../../../../assets/ColoresCoches/Blanco.png";
    const negro = "../../../../../../assets/ColoresCoches/Negro.png";
    const rojo = "../../../../../../assets/ColoresCoches/Rojo.png";
    const amarillo = "../../../../../../assets/ColoresCoches/Amarillo.png";
    const verde = "../../../../../../assets/ColoresCoches/Verde.png";
    const gris = "../../../../../../assets/ColoresCoches/Gris.png";
    const dorado = "../../../../../../assets/ColoresCoches/Dorado.png";
    const marron = "../../../../../../assets/ColoresCoches/Marr\xF3n.png";
    const morado = "../../../../../../assets/ColoresCoches/Morado.png";
    const beige = "../../../../../../assets/ColoresCoches/Beige.png";
    const perla = "../../../../../../assets/ColoresCoches/Perla.png";
    const otro = "../../../../../../assets/ColoresCoches/Otros.png";
    switch (color) {
      case "blanco":
        return blanco;
      case "negro":
        return negro;
      case "rojo":
        return rojo;
      case "amarillo":
        return amarillo;
      case "verde":
        return verde;
      case "gris":
        return gris;
      case "dorado":
        return dorado;
      case "marron":
        return marron;
      case "morado":
        return morado;
      case "beige":
        return beige;
      case "perla":
        return perla;
      case "otro":
        return otro;
      default:
        return "";
    }
  }
  onModeloChange(valor) {
    const modeloLimpio = typeof valor === "object" && valor !== null ? valor.modelo || valor.valor || valor : valor;
    this.modeloSeleccionado = modeloLimpio;
  }
  onMarcaChange(valor) {
    const marcaLimpia = typeof valor === "object" && valor !== null ? valor.marca || valor.valor || valor : valor;
    this.marcaSeleccionada = marcaLimpia;
    this.filtrarModelos(marcaLimpia);
  }
  onColorChange(valor) {
    const colorLimpio = typeof valor === "object" && valor !== null ? valor.valor || valor : valor;
    this.colorSeleccionado = colorLimpio;
  }
  /**
   * Poner los campos del vehículo en editables (selectores e input)
   * @param vehiculo
   */
  editarFilaVehiculo(vehiculo) {
    this.editandoCoche = true;
    this.cocheEnEdicion = vehiculo;
    console.log("coche en edicion en funci\xF3n: ", this.cocheEnEdicion);
    this.mostrarSelectorVehiculo = true;
    this.marcaSeleccionada = vehiculo.marca;
    this.modeloSeleccionado = vehiculo.modelo;
    this.colorSeleccionado = vehiculo.color;
    const cocheEncontrado = this.listadoCoches.find((c) => c.marca === vehiculo.marca);
    this.modelosFiltrados = cocheEncontrado ? cocheEncontrado.modelos : [];
    this.cdr.detectChanges();
  }
  /**
   * Función para añadir un vehículo a la tabla
   */
  guardarVehiculo() {
    if (!this.marcaSeleccionada || !this.modeloSeleccionado || !this.colorSeleccionado) {
      return;
    }
    this.loadUserData();
    if (!this.userData.usuario && this.userData.id) {
      this.userData = { usuario: this.userData };
    }
    const nuevoCoche = {
      marca: this.marcaSeleccionada,
      modelo: this.modeloSeleccionado,
      color: this.colorSeleccionado
    };
    nuevoCoche.usuario_id = this.userData.usuario.id;
    this.vehiculosServicesService.anadirVehiculo(nuevoCoche).subscribe((resultado) => {
      console.log("Vehiculo guardado correctamente:", resultado);
      this.userService.obtenerUsuarioPorID(this.userData.usuario.id).subscribe((usuarioActualizado) => {
        var _a;
        this.userData = usuarioActualizado;
        localStorage.setItem("userData", JSON.stringify(this.userData));
        if (usuarioActualizado == null ? void 0 : usuarioActualizado.vehiculos) {
          this.vehiculos = [...usuarioActualizado.vehiculos];
        } else if ((_a = usuarioActualizado == null ? void 0 : usuarioActualizado.usuario) == null ? void 0 : _a.vehiculos) {
          this.vehiculos = [...usuarioActualizado.usuario.vehiculos];
        }
        this.messageService.add({
          severity: "success",
          summary: "Veh\xEDculo eliminado",
          detail: "El veh\xEDculo se ha eliminado correctamente."
        });
        this.marcaSeleccionada = "";
        this.modeloSeleccionado = "";
        this.colorSeleccionado = "";
        this.mostrarSelectorVehiculo = false;
        this.vehiculoAnadidoExito.emit(usuarioActualizado);
        this.mostrarSelectorVehiculoChange.emit(false);
        this.cdr.detectChanges();
      });
    });
  }
  /**
   * Se encarga de enviar los datos al backend para guardar los nuevos datos del vehículo
   * @param vehiculo
   */
  guardarVehiculoEditado(vehiculo) {
    if (!this.marcaSeleccionada || !this.modeloSeleccionado || !this.colorSeleccionado) {
      return;
    }
    console.log("Guardando cambios en el veh\xEDculo: ", vehiculo);
    vehiculo.editandoVehiculo = false;
    vehiculo.marca = this.marcaSeleccionada;
    vehiculo.modelo = this.modeloSeleccionado;
    vehiculo.color = this.colorSeleccionado;
    this.funcionesComunes.editarVehiculo(vehiculo);
    this.cdr.detectChanges();
    this.translate.get("VEHICULOS.TITULO_GUARDANDOALEDITAR").subscribe((vehiculoGuardadoMessage) => {
      this.messageService.add({
        severity: "success",
        summary: vehiculoGuardadoMessage,
        detail: this.translate.instant("VEHICULOS.GUARDANDOALEDITAR")
      });
    });
    this.marcaSeleccionada = "";
    this.modeloSeleccionado = "";
    this.colorSeleccionado = "";
    this.mostrarSelectorVehiculo = false;
    this.editandoCoche = false;
    this.mostrarSelectorVehiculoChange.emit(false);
  }
  cancelarCoche() {
    this.mostrarSelectorVehiculo = false;
    this.marcaSeleccionada = "";
    this.modeloSeleccionado = "";
    this.colorSeleccionado = "";
    this.modelosFiltrados = [];
    this.editandoCoche = false;
    this.cocheEnEdicion = null;
    this.mostrarSelectorVehiculoChange.emit(false);
  }
  /**
   * Función para filtrar los modelos de los coches
   */
  filtrarModelos(nuevaMarca) {
    this.marcaSeleccionada = nuevaMarca;
    const coche = this.listadoCoches.find((vehiculo) => vehiculo.marca === nuevaMarca);
    this.modelosFiltrados = coche ? coche.modelos : [];
    this.modeloSeleccionado = "";
  }
  seleccionarCoche(coche) {
    if (this.modoSeleccion) {
      this.cocheSeleccionado = coche;
      this.cocheSeleccionadoChange.emit(coche);
    }
  }
  compareVehiculos(c1, c2) {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  /**
   * Función para trackear el vehículo.
   *
   * @param index -> Índice del vehículo.
   * @param coche -> Vehículo a trackear.
   * @returns Devuelve el id del vehículo.
   */
  trackByVehiculo(index, coche) {
    return coche.id;
  }
  /**
   * Comprueba si el coche del bucle es el mismo que está seleccionado por defecto.
   */
  isCocheSeleccionado(coche) {
    if (!this.cocheSeleccionado || !coche)
      return false;
    if (this.cocheSeleccionado.id !== void 0 && coche.id !== void 0) {
      return this.cocheSeleccionado.id === coche.id;
    }
    return this.cocheSeleccionado.marca === coche.marca && this.cocheSeleccionado.modelo === coche.modelo && this.cocheSeleccionado.color === coche.color;
  }
  static \u0275fac = function TablaVehiculosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TablaVehiculosComponent)(\u0275\u0275directiveInject(FuncionesComunes), \u0275\u0275directiveInject(FuncionesUsuario), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(VehiculosServicesService), \u0275\u0275directiveInject(UserServicesService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(TranslateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TablaVehiculosComponent, selectors: [["app-tabla-vehiculos"]], inputs: { vehiculos: "vehiculos", modoSeleccion: "modoSeleccion", cocheSeleccionado: "cocheSeleccionado", mostrarSelectorVehiculo: "mostrarSelectorVehiculo", marcaSeleccionada: "marcaSeleccionada", modeloSeleccionado: "modeloSeleccionado", colorSeleccionado: "colorSeleccionado", matriculaNoValida: "matriculaNoValida" }, outputs: { cocheSeleccionadoChange: "cocheSeleccionadoChange", editarVehiculo: "editarVehiculo", eliminarVehiculo: "eliminarVehiculo", irARegistrarVehiculo: "irARegistrarVehiculo", vehiculoAnadidoExito: "vehiculoAnadidoExito", mostrarSelectorVehiculoChange: "mostrarSelectorVehiculoChange" }, decls: 11, vars: 7, consts: [["sinVehiculos", ""], ["modoPerfil", ""], ["marcaTexto", ""], ["modeloTexto", ""], ["colorImagen", ""], [1, "mb-5", "container"], ["id", "titulo-vehiculos", 1, "text-center", "mb-1", "mb-sm-1", "mb-md-5"], [1, "contenedor_seccion"], [1, "contenedor_inputs"], [4, "ngIf", "ngIfElse"], ["class", "mt-3 d-flex justify-content-center", 4, "ngIf"], ["class", "mt-3 info text-center", 4, "ngIf"], ["lines", "none", "role", "radiogroup", 1, "scrollable-list", "custom-goguay-list"], [3, "ngModelChange", "ionChange", "ngModel", "compareWith"], ["class", "goguay-list-item", "tabindex", "0", 3, "selected", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "d-flex", "flex-column", "align-items-center", "mt-3", "alternate-add-box"], [1, "mb-2", "text-muted", "small"], ["type", "button", 1, "btn-goguay-mini", 3, "click"], ["aria-hidden", "true", 1, "fi", "fi-rr-plus", "me-1"], ["tabindex", "0", 1, "goguay-list-item", 3, "click"], [1, "d-flex", "align-items-center"], [1, "car-icon-wrapper", "me-3"], [1, "colorCoche", 3, "src", "alt"], [1, "car-info-text"], ["slot", "end", "mode", "ios", 3, "value"], ["lines", "none", 1, "scrollable-list", "custom-goguay-list", "d-none", "d-md-block"], ["class", "goguay-list-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cards-vehiculos", "d-flex", "flex-wrap", "gap-2", "justify-content-center", "d-md-none", "mt-3"], ["class", "card mb-1", 4, "ngFor", "ngForOf"], ["class", "d-flex flex-column align-items-center mt-3 alternate-add-box", 4, "ngIf"], [1, "goguay-list-item"], ["slot", "end", 1, "d-flex", "align-items-center", "gap-2"], ["mat-icon-button", "", 1, "botones_tabla", "btn_bg", 3, "click"], ["aria-hidden", "true"], [1, "card", "mb-1"], [1, "card-body"], [1, "justify-content-center", "d-flex"], [1, "mt-3", "justify-content-center", "d-flex"], [1, "text-center", "d-flex", "justify-content-center", "gap-2"], ["idUnico", "marca-vehiculo", "labelKey", "", "placeholderKey", "TABLA_VEHICULOS.SELECTOR.MARCA", 3, "seleccionCambiada", "opciones", "valor", "ariaLabel", "soloLectura"], ["idUnico", "modelo-vehiculo", "placeholderKey", "TABLA_VEHICULOS.SELECTOR.MODELO", 3, "seleccionCambiada", "opciones", "valor", "ariaLabel", "soloLectura"], ["idUnico", "color-vehiculo", "placeholderKey", "TABLA_VEHICULOS.SELECTOR.COLOR", 3, "seleccionCambiada", "opciones", "valor", "ariaLabel", "soloLectura"], ["role", "status", "aria-live", "polite", 1, "mensaje-sin-vehiculos", "p-2", "text-center", "card", "shadow-sm", "rounded-3"], [1, "text-muted"], [1, "mt-3"], [1, "mt-3", "d-flex", "justify-content-center"], [1, "bloque-selectores"], ["role", "group"], [1, "row", "d-flex", "justify-content-center"], [1, "col-12", "col-md-4", "mb-2", "mb-md-0"], ["class", "container d-flex justify-content-center mt-2", 4, "ngIf"], [1, "container", "d-flex", "justify-content-center", "mt-2"], ["type", "button", "mat-raised-button", "", 1, "btn", "btn_bg", 3, "click", "disabled"], ["type", "button", "mat-raised-button", "", 1, "btn", "btn_bg", "ms-2", 3, "click"], [1, "d-flex", "justify-content-center", "gap-3", "mt-2"], ["type", "button", "mat-raised-button", "", 1, "btn", "btn_bg", 3, "click"], [1, "mt-3", "info", "text-center"], ["href", "mailto:gestion.goguay@gmail.com", 1, "link-item"], ["aria-hidden", "true", 1, "fi", "fi-rr-envelope", "ms-2"]], template: function TablaVehiculosComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 5)(1, "h4", 6);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 7)(5, "div", 8);
      \u0275\u0275template(6, TablaVehiculosComponent_ng_container_6_Template, 4, 2, "ng-container", 9)(7, TablaVehiculosComponent_ng_template_7_Template, 9, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, TablaVehiculosComponent_div_9_Template, 18, 23, "div", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, TablaVehiculosComponent_div_10_Template, 8, 6, "div", 11);
    }
    if (rf & 2) {
      const sinVehiculos_r21 = \u0275\u0275reference(8);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "TABLA_VEHICULOS.TITULO"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.vehiculos && ctx.vehiculos.length > 0)("ngIfElse", sinVehiculos_r21);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.mostrarSelectorVehiculo);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mostrarSelectorVehiculo);
    }
  }, dependencies: [IonicModule, IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, IonRow, SelectValueAccessorDirective, CommonModule, NgForOf, NgIf, FormsModule, NgControlStatus, NgModel, TranslateModule, MatIcon, MatFormFieldModule, SelectorGeneralComponent, TranslatePipe], styles: ['@charset "UTF-8";\n\n\n\n.contenedor_seccion[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.colorCoche[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 50px;\n  border-radius: 4px;\n}\n.bloque-selectores[_ngcontent-%COMP%] {\n  width: 800px;\n  margin: 0 auto;\n}\n.bloque-selectores[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.car-icon-wrapper[_ngcontent-%COMP%] {\n  padding: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.alternate-add-box[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.goguay-list-item[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  --background: transparent;\n  --padding-start: 12px;\n  --inner-padding-end: 12px;\n  --min-height: 56px;\n  border-radius: 16px !important;\n  margin-bottom: 4px;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.goguay-list-item[_ngcontent-%COMP%]::part(native) {\n  border-radius: 16px !important;\n}\n.goguay-list-item.selected[_ngcontent-%COMP%] {\n  --background: #f0d7b4;\n}\n.goguay-list-item[_ngcontent-%COMP%]:hover {\n  --background: #f0d7b456;\n  transform: translateY(-2px);\n}\n.goguay-list-item[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%] {\n  --color: #b0b0b0;\n  --color-checked: #e0a667;\n  margin-inline-end: 4px;\n}\n.goguay-list-item[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]::part(mark) {\n  border-color: #111111 !important;\n}\n.goguay-list-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 0.95rem !important;\n  color: #111111;\n}\n.goguay-list-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.78rem !important;\n  line-height: 1.3;\n}\n.custom-goguay-list[_ngcontent-%COMP%] {\n  background: white !important;\n  border-radius: 24px !important;\n  padding: 8px !important;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28) !important;\n  border: 1px solid #f6f6f6;\n  max-width: 450px !important;\n  margin: 0 auto !important;\n}\n.btn-goguay-mini[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #e0a667;\n  border: 1px solid #e0a667;\n  padding: 6px 16px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  border-radius: 35px;\n  box-shadow: 0 4px 12px rgba(224, 166, 103, 0.1);\n  transition: all 0.2s ease;\n}\n.btn-goguay-mini[_ngcontent-%COMP%]:hover {\n  background-color: #e0a567;\n  color: #ffffff;\n  box-shadow: 0 6px 16px rgba(224, 166, 103, 0.2);\n}\n.botones_tabla[_ngcontent-%COMP%] {\n  border-radius: 15%;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.cards-vehiculos[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  width: 20%;\n  min-width: 110px;\n  height: 150px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n  border-radius: 35px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);\n  padding: 10px;\n  margin-bottom: 12px;\n}\n.cards-vehiculos[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  padding: 0;\n}\n.cards-vehiculos[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.cards-vehiculos[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(.text-center) {\n  font-size: 0.85rem;\n  line-height: 1.1;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.cards-vehiculos[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%], \n.cards-vehiculos[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   div[cass*=text-center][_ngcontent-%COMP%], \n.cards-vehiculos[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  margin-top: auto;\n}\n.cards-vehiculos[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   select.form-select[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding: 0.25rem 0.3rem;\n  height: 25px;\n}\n.info[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 0.9rem;\n}\na[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n}\n@media (max-width: 767px) {\n  .tabla-vehiculos[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 0.85rem;\n  }\n  .tabla-vehiculos[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .tabla-vehiculos[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 6px 8px;\n  }\n  .acciones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 4px;\n    min-width: 28px;\n    min-height: 28px;\n  }\n  .cards-vehiculos[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   select.form-select[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    line-height: 1.2;\n    padding: 0.25rem 0.3rem;\n    height: 32px;\n    transform: scale(0.9);\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n  .cards-vehiculos[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   select.form-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=tabla-vehiculos.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TablaVehiculosComponent, [{
    type: Component,
    args: [{ selector: "app-tabla-vehiculos", standalone: true, imports: [IonicModule, CommonModule, FormsModule, TranslateModule, MatIcon, MatFormFieldModule, SelectorGeneralComponent], template: `<div class="mb-5 container">\r
  <h4\r
    class="text-center mb-1 mb-sm-1 mb-md-5"\r
    id="titulo-vehiculos"\r
  >\r
    {{ 'TABLA_VEHICULOS.TITULO' | translate }}\r
  </h4>\r
  <div class="contenedor_seccion">\r
    <div class="contenedor_inputs">\r
      <ng-container *ngIf="vehiculos && vehiculos.length > 0; else sinVehiculos">\r
        <!-- MODO SELECCI\xD3N (Crear Viaje) -->\r
        <ng-container *ngIf="modoSeleccion; else modoPerfil">\r
          <ion-list\r
            class="scrollable-list custom-goguay-list"\r
            lines="none"\r
            role="radiogroup"\r
            [attr.aria-labelledby]="'titulo-vehiculos'"\r
          >\r
            <ion-radio-group\r
              [(ngModel)]="cocheSeleccionado"\r
              [compareWith]="compareVehiculos"\r
              (ionChange)="seleccionarCoche(cocheSeleccionado)"\r
            >\r
              <ion-item\r
                *ngFor="let coche of vehiculos; trackBy: trackByVehiculo"\r
                (click)="seleccionarCoche(coche)"\r
                class="goguay-list-item"\r
                [class.selected]="isCocheSeleccionado(coche)"\r
                [attr.aria-checked]="isCocheSeleccionado(coche)"\r
                tabindex="0"\r
              >\r
                <ion-label class="d-flex align-items-center">\r
                  <div class="car-icon-wrapper me-3">\r
                    <img\r
                      class="colorCoche"\r
                      [src]="mostrarColorCoche(coche.color)"\r
                      [alt]="'TABLA_VEHICULOS.SELECTOR.COLOR_VEHICULO' | translate: { color: coche.color }"\r
                    />\r
                  </div>\r
                  <span class="car-info-text">{{ coche.marca }} {{ coche.modelo }}</span>\r
                </ion-label>\r
                <ion-radio\r
                  slot="end"\r
                  [value]="coche"\r
                  mode="ios"\r
                  [attr.aria-label]="coche.marca + ' ' + coche.modelo + ', ' + coche.color"\r
                ></ion-radio>\r
              </ion-item>\r
            </ion-radio-group>\r
          </ion-list>\r
\r
          <div class="d-flex flex-column align-items-center mt-3 alternate-add-box">\r
            <p class="mb-2 text-muted small">\r
              {{ 'TABLA_VEHICULOS.ANADIR_OTRO' | translate }}\r
            </p>\r
            <button\r
              type="button"\r
              class="btn-goguay-mini"\r
              (click)="irARegistrarVehiculo.emit()"\r
            >\r
              <i\r
                class="fi fi-rr-plus me-1"\r
                aria-hidden="true"\r
              ></i>\r
              {{ 'BOTONES.TABLAVEHICULOS.ANADIR_VEHICULO' | translate }}\r
            </button>\r
          </div>\r
        </ng-container>\r
\r
        <!-- MODO PERFIL (Mi Perfil: con Editar, Eliminar y bot\xF3n de a\xF1adir) -->\r
        <ng-template #modoPerfil>\r
          <ion-list\r
            class="scrollable-list custom-goguay-list d-none d-md-block"\r
            lines="none"\r
          >\r
            <ion-item\r
              *ngFor="let coche of vehiculos; trackBy: trackByVehiculo"\r
              class="goguay-list-item"\r
            >\r
              <ion-label class="d-flex align-items-center">\r
                <div class="car-icon-wrapper me-3">\r
                  <img\r
                    class="colorCoche"\r
                    [src]="mostrarColorCoche(coche.color)"\r
                    [alt]="'TABLA_VEHICULOS.SELECTOR.COLOR' | translate: { color: coche.color }"\r
                  />\r
                </div>\r
                <span class="car-info-text">{{ coche.marca }} {{ coche.modelo }}</span>\r
              </ion-label>\r
\r
              <!-- Botones de Editar y Eliminar (Solo en Mi Perfil) -->\r
              <div\r
                class="d-flex align-items-center gap-2"\r
                slot="end"\r
              >\r
                <button\r
                  mat-icon-button\r
                  class="botones_tabla btn_bg"\r
                  [attr.aria-label]="\r
                    'BOTONES.TABLAVEHICULOS.EDITAR_ARIALABEL'\r
                      | translate\r
                        : {\r
                            marca: coche.marca,\r
                            modelo: coche.modelo,\r
                            color: coche.color,\r
                          }\r
                  "\r
                  (click)="editarFilaVehiculo(coche); editarVehiculo.emit(coche); $event.stopPropagation()"\r
                >\r
                  <mat-icon aria-hidden="true">edit</mat-icon>\r
                </button>\r
                <button\r
                  mat-icon-button\r
                  [attr.aria-label]="\r
                    'BOTONES.TABLAVEHICULOS.ELIMINAR_ARIALABEL'\r
                      | translate\r
                        : {\r
                            marca: coche.marca,\r
                            modelo: coche.modelo,\r
                            color: coche.color,\r
                          }\r
                  "\r
                  class="botones_tabla btn_bg"\r
                  (click)="eliminarVehiculo.emit(coche); $event.stopPropagation()"\r
                >\r
                  <mat-icon aria-hidden="true">delete</mat-icon>\r
                </button>\r
              </div>\r
            </ion-item>\r
          </ion-list>\r
\r
          <!-- Cards para dispositivos moviles -->\r
          <div class="cards-vehiculos d-flex flex-wrap gap-2 justify-content-center d-md-none mt-3">\r
            <div\r
              class="card mb-1"\r
              *ngFor="let coche of vehiculos"\r
            >\r
              <div class="card-body">\r
                <div class="justify-content-center d-flex">\r
                  <ng-container *ngIf="coche.editandoVehiculo; else marcaTexto">\r
                    <app-selector-general\r
                      idUnico="marca-vehiculo"\r
                      labelKey=""\r
                      placeholderKey="TABLA_VEHICULOS.SELECTOR.MARCA"\r
                      [opciones]="marcasParaSelector"\r
                      [valor]="marcaSeleccionada"\r
                      (seleccionCambiada)="onMarcaChange($event)"\r
                      [ariaLabel]="'TABLA_VEHICULOS.SELECTOR.MARCA' | translate"\r
                      [soloLectura]="true"\r
                    ></app-selector-general>\r
                  </ng-container>\r
                  <ng-template #marcaTexto>{{ coche.marca }}</ng-template>\r
                </div>\r
\r
                <div class="justify-content-center d-flex">\r
                  <ng-container *ngIf="coche.editandoVehiculo; else modeloTexto">\r
                    <app-selector-general\r
                      idUnico="modelo-vehiculo"\r
                      placeholderKey="TABLA_VEHICULOS.SELECTOR.MODELO"\r
                      [opciones]="modelosFiltrados"\r
                      [valor]="modeloSeleccionado"\r
                      (seleccionCambiada)="onModeloChange($event)"\r
                      [ariaLabel]="'TABLA_VEHICULOS.SELECTOR.MODELO' | translate"\r
                      [soloLectura]="true"\r
                    ></app-selector-general>\r
                  </ng-container>\r
                  <ng-template #modeloTexto>{{ coche.modelo }}</ng-template>\r
                </div>\r
\r
                <div class="mt-3 justify-content-center d-flex">\r
                  <ng-container *ngIf="coche.editandoVehiculo; else colorImagen">\r
                    <app-selector-general\r
                      idUnico="color-vehiculo"\r
                      placeholderKey="TABLA_VEHICULOS.SELECTOR.COLOR"\r
                      [opciones]="listadoColoresUnico"\r
                      [valor]="colorSeleccionado"\r
                      (seleccionCambiada)="onColorChange($event)"\r
                      [ariaLabel]="'TABLA_VEHICULOS.SELECTOR.COLOR' | translate"\r
                      [soloLectura]="true"\r
                    ></app-selector-general>\r
                  </ng-container>\r
                  <ng-template #colorImagen>\r
                    <img\r
                      class="colorCoche"\r
                      [src]="mostrarColorCoche(coche.color)"\r
                      [alt]="'TABLA_VEHICULOS.SELECTOR.COLOR_VEHICULO' | translate: { color: coche.color }"\r
                    />\r
                  </ng-template>\r
                </div>\r
\r
                <div class="text-center d-flex justify-content-center gap-2">\r
                  <button\r
                    mat-icon-button\r
                    class="botones_tabla btn_bg"\r
                    (click)="coche.editandoVehiculo ? guardarVehiculoEditado(coche) : editarFilaVehiculo(coche)"\r
                    [attr.aria-label]="\r
                      (coche.editandoVehiculo\r
                        ? 'BOTONES.TABLAVEHICULOS.GUARDAR_TRAS_EDITAR_ARIALABEL'\r
                        : 'BOTONES.TABLAVEHICULOS.EDITAR_ARIALABEL'\r
                      ) | translate: { marca: coche.marca, modelo: coche.modelo, color: coche.color }\r
                    "\r
                  >\r
                    <mat-icon aria-hidden="true">\r
                      {{ coche.editandoVehiculo ? 'save' : 'edit' }}\r
                    </mat-icon>\r
                  </button>\r
                  <button\r
                    mat-icon-button\r
                    class="botones_tabla btn_bg"\r
                    (click)="eliminarVehiculo.emit(coche); $event.stopPropagation()"\r
                    [attr.aria-label]="\r
                      'BOTONES.TABLAVEHICULOS.ELIMINAR_ARIALABEL'\r
                        | translate\r
                          : {\r
                              marca: coche.marca,\r
                              modelo: coche.modelo,\r
                              color: coche.color,\r
                            }\r
                    "\r
                  >\r
                    <mat-icon aria-hidden="true">delete</mat-icon>\r
                  </button>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Bot\xF3n de a\xF1adir veh\xEDculo tambi\xE9n visible en Mi Perfil -->\r
          <div\r
            *ngIf="!editandoCoche"\r
            class="d-flex flex-column align-items-center mt-3 alternate-add-box"\r
          >\r
            <button\r
              type="button"\r
              class="btn-goguay-mini"\r
              (click)="irARegistrarVehiculo.emit()"\r
            >\r
              <i\r
                class="fi fi-rr-plus me-1"\r
                aria-hidden="true"\r
              ></i>\r
              {{ 'BOTONES.TABLAVEHICULOS.ANADIR_VEHICULO' | translate }}\r
            </button>\r
          </div>\r
        </ng-template>\r
      </ng-container>\r
\r
      <ng-template #sinVehiculos>\r
        <div\r
          class="mensaje-sin-vehiculos p-2 text-center card shadow-sm rounded-3"\r
          role="status"\r
          aria-live="polite"\r
        >\r
          <p class="text-muted">\r
            {{ 'TABLA_VEHICULOS.SIN_VEHICULOS' | translate }}\r
          </p>\r
          <div class="mt-3">\r
            <button\r
              type="button"\r
              class="btn-goguay-mini"\r
              (click)="irARegistrarVehiculo.emit()"\r
            >\r
              <i\r
                class="fi fi-rr-plus me-1"\r
                aria-hidden="true"\r
              ></i>\r
              {{ 'BOTONES.TABLAVEHICULOS.ANADIR_VEHICULO' | translate }}\r
            </button>\r
          </div>\r
        </div>\r
        <!--Selector de marca, modelo y color de vehiculos y bot\xF3n para guardar vehiculo-->\r
      </ng-template>\r
\r
      <div\r
        class="mt-3 d-flex justify-content-center"\r
        *ngIf="mostrarSelectorVehiculo"\r
      >\r
        <div class="bloque-selectores">\r
          <div\r
            role="group"\r
            [attr.aria-label]="'TABLA_VEHICULOS.TITULO' | translate"\r
          >\r
            <div class="row d-flex justify-content-center">\r
              <!-- Selector de marca -->\r
              <div class="col-12 col-md-4 mb-2 mb-md-0">\r
                <app-selector-general\r
                  idUnico="marca-vehiculo"\r
                  labelKey=""\r
                  placeholderKey="TABLA_VEHICULOS.SELECTOR.MARCA"\r
                  [opciones]="marcasParaSelector"\r
                  [valor]="marcaSeleccionada"\r
                  (seleccionCambiada)="onMarcaChange($event)"\r
                  [ariaLabel]="'TABLA_VEHICULOS.SELECTOR.MARCA' | translate"\r
                  [soloLectura]="true"\r
                ></app-selector-general>\r
              </div>\r
\r
              <!-- Selector de modelo -->\r
              <div class="col-12 col-md-4 mb-2 mb-md-0">\r
                <app-selector-general\r
                  idUnico="modelo-vehiculo"\r
                  placeholderKey="TABLA_VEHICULOS.SELECTOR.MODELO"\r
                  [opciones]="modelosFiltrados"\r
                  [valor]="modeloSeleccionado"\r
                  (seleccionCambiada)="onModeloChange($event)"\r
                  [ariaLabel]="'TABLA_VEHICULOS.SELECTOR.MODELO' | translate"\r
                  [soloLectura]="true"\r
                ></app-selector-general>\r
              </div>\r
\r
              <!-- Selector de color -->\r
              <div class="col-12 col-md-4 mb-2 mb-md-0">\r
                <app-selector-general\r
                  idUnico="color-vehiculo"\r
                  placeholderKey="TABLA_VEHICULOS.SELECTOR.COLOR"\r
                  [opciones]="listadoColoresUnico"\r
                  [valor]="colorSeleccionado"\r
                  (seleccionCambiada)="onColorChange($event)"\r
                  [ariaLabel]="'TABLA_VEHICULOS.SELECTOR.COLOR' | translate"\r
                  [soloLectura]="true"\r
                ></app-selector-general>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <ion-row class="mt-3">\r
            <div\r
              *ngIf="!editandoCoche"\r
              class="container d-flex justify-content-center mt-2"\r
            >\r
              <button\r
                type="button"\r
                [disabled]="!marcaSeleccionada || !modeloSeleccionado || !colorSeleccionado"\r
                class="btn btn_bg"\r
                mat-raised-button\r
                (click)="guardarVehiculo()"\r
              >\r
                {{ 'BOTONES.TABLAVEHICULOS.GUARDAR_VEHICULO' | translate }}\r
              </button>\r
              <!-- Boton para cancelar el guardado de un veh\xEDculo nuevo -->\r
              <button\r
                type="button"\r
                class="btn btn_bg ms-2"\r
                mat-raised-button\r
                (click)="cancelarCoche()"\r
              >\r
                {{ 'BOTONES.TABLAVEHICULOS.CANCELAR' | translate }}\r
              </button>\r
            </div>\r
            <div\r
              *ngIf="editandoCoche"\r
              class="container d-flex justify-content-center mt-2"\r
            >\r
              <div class="d-flex justify-content-center gap-3 mt-2">\r
                <!-- Bot\xF3n para guardar un coche tras editarlo -->\r
                <button\r
                  type="button"\r
                  [disabled]="!marcaSeleccionada || !modeloSeleccionado || !colorSeleccionado"\r
                  class="btn btn_bg"\r
                  mat-raised-button\r
                  (click)="guardarVehiculoEditado(cocheEnEdicion)"\r
                >\r
                  {{ 'BOTONES.TABLAVEHICULOS.GUARDAR_VEHICULO' | translate }}\r
                </button>\r
                <!-- Bot\xF3n para cancelar un nuevo coche o coche editando -->\r
                <button\r
                  type="button"\r
                  class="btn btn_bg"\r
                  mat-raised-button\r
                  (click)="cancelarCoche()"\r
                >\r
                  {{ 'BOTONES.TABLAVEHICULOS.CANCELAR' | translate }}\r
                </button>\r
              </div>\r
            </div>\r
            <div class="container d-flex justify-content-center mt-2"></div>\r
          </ion-row>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<div\r
  class="mt-3 info text-center"\r
  *ngIf="mostrarSelectorVehiculo"\r
>\r
  <span class="mt-3">{{ 'TABLA_VEHICULOS.INFO' | translate }}</span>\r
  <a\r
    href="mailto:gestion.goguay&#64;gmail.com"\r
    class="link-item"\r
    [attr.aria-label]="'TABLA_VEHICULOS.ENVIAR_CORREO' | translate"\r
  >\r
    <i\r
      class="fi fi-rr-envelope ms-2"\r
      aria-hidden="true"\r
    ></i>\r
    gestion.goguay&#64;gmail.com\r
  </a>\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/components/tabla-vehiculos/vista-tabla-vehiculos/tabla-vehiculos.component.scss */\n.contenedor_seccion {\n  background-color: transparent;\n}\n.colorCoche {\n  height: 30px;\n  width: 50px;\n  border-radius: 4px;\n}\n.bloque-selectores {\n  width: 800px;\n  margin: 0 auto;\n}\n.bloque-selectores ion-row {\n  width: 100%;\n}\n.car-icon-wrapper {\n  padding: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.alternate-add-box {\n  background-color: transparent;\n}\n.goguay-list-item {\n  max-width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  --background: transparent;\n  --padding-start: 12px;\n  --inner-padding-end: 12px;\n  --min-height: 56px;\n  border-radius: 16px !important;\n  margin-bottom: 4px;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.goguay-list-item::part(native) {\n  border-radius: 16px !important;\n}\n.goguay-list-item.selected {\n  --background: #f0d7b4;\n}\n.goguay-list-item:hover {\n  --background: #f0d7b456;\n  transform: translateY(-2px);\n}\n.goguay-list-item ion-radio {\n  --color: #b0b0b0;\n  --color-checked: #e0a667;\n  margin-inline-end: 4px;\n}\n.goguay-list-item ion-radio::part(mark) {\n  border-color: #111111 !important;\n}\n.goguay-list-item h2 {\n  font-size: 0.95rem !important;\n  color: #111111;\n}\n.goguay-list-item p {\n  font-size: 0.78rem !important;\n  line-height: 1.3;\n}\n.custom-goguay-list {\n  background: white !important;\n  border-radius: 24px !important;\n  padding: 8px !important;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28) !important;\n  border: 1px solid #f6f6f6;\n  max-width: 450px !important;\n  margin: 0 auto !important;\n}\n.btn-goguay-mini {\n  background-color: #ffffff;\n  color: #e0a667;\n  border: 1px solid #e0a667;\n  padding: 6px 16px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  border-radius: 35px;\n  box-shadow: 0 4px 12px rgba(224, 166, 103, 0.1);\n  transition: all 0.2s ease;\n}\n.btn-goguay-mini:hover {\n  background-color: #e0a567;\n  color: #ffffff;\n  box-shadow: 0 6px 16px rgba(224, 166, 103, 0.2);\n}\n.botones_tabla {\n  border-radius: 15%;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.cards-vehiculos .card {\n  background-color: transparent !important;\n  width: 20%;\n  min-width: 110px;\n  height: 150px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n  border-radius: 35px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);\n  padding: 10px;\n  margin-bottom: 12px;\n}\n.cards-vehiculos .card-body {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  padding: 0;\n}\n.cards-vehiculos .card-body span,\n.cards-vehiculos .card-body div:not(.text-center) {\n  font-size: 0.85rem;\n  line-height: 1.1;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.cards-vehiculos .card-body .text-center,\n.cards-vehiculos .card-body div[cass*=text-center],\n.cards-vehiculos .card-body div:last-child {\n  margin-top: auto;\n}\n.cards-vehiculos .card-body select.form-select {\n  font-size: 0.8rem;\n  padding: 0.25rem 0.3rem;\n  height: 25px;\n}\n.info {\n  color: #555;\n  font-size: 0.9rem;\n}\na {\n  color: #007bff;\n  text-decoration: none;\n}\n@media (max-width: 767px) {\n  .tabla-vehiculos table {\n    width: 100%;\n    font-size: 0.85rem;\n  }\n  .tabla-vehiculos th,\n  .tabla-vehiculos td {\n    padding: 6px 8px;\n  }\n  .acciones button {\n    padding: 4px;\n    min-width: 28px;\n    min-height: 28px;\n  }\n  .cards-vehiculos .card-body select.form-select {\n    font-size: 0.8rem;\n    line-height: 1.2;\n    padding: 0.25rem 0.3rem;\n    height: 32px;\n    transform: scale(0.9);\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n  .cards-vehiculos .card-body select.form-select option {\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=tabla-vehiculos.component.css.map */\n'] }]
  }], () => [{ type: FuncionesComunes }, { type: FuncionesUsuario }, { type: ChangeDetectorRef }, { type: VehiculosServicesService }, { type: UserServicesService }, { type: MessageService }, { type: TranslateService }], { vehiculos: [{
    type: Input
  }], modoSeleccion: [{
    type: Input
  }], cocheSeleccionado: [{
    type: Input
  }], mostrarSelectorVehiculo: [{
    type: Input
  }], marcaSeleccionada: [{
    type: Input
  }], modeloSeleccionado: [{
    type: Input
  }], colorSeleccionado: [{
    type: Input
  }], matriculaNoValida: [{
    type: Input
  }], cocheSeleccionadoChange: [{
    type: Output
  }], editarVehiculo: [{
    type: Output
  }], eliminarVehiculo: [{
    type: Output
  }], irARegistrarVehiculo: [{
    type: Output
  }], vehiculoAnadidoExito: [{
    type: Output
  }], mostrarSelectorVehiculoChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TablaVehiculosComponent, { className: "TablaVehiculosComponent", filePath: "src/app/components/tabla-vehiculos/vista-tabla-vehiculos/tabla-vehiculos.component.ts", lineNumber: 24 });
})();

export {
  COLORES,
  CARS,
  TablaVehiculosComponent
};
//# sourceMappingURL=chunk-2INZHQTF.js.map
