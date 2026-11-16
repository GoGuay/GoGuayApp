import {
  FuncionesUsuario
} from "./chunk-YVYBN5EF.js";
import {
  SelectorGeneralComponent
} from "./chunk-PC7UGHOQ.js";
import {
  MatFormFieldModule
} from "./chunk-SPEHEA2H.js";
import {
  FuncionesComunes,
  VehiculosServicesService
} from "./chunk-Z2B2BIHD.js";
import {
  MessageService
} from "./chunk-Q5CK7R7A.js";
import {
  UserServicesService
} from "./chunk-43M6K65B.js";
import {
  MatIcon
} from "./chunk-ZPEWRVEX.js";
import {
  IonItem,
  IonLabel,
  IonList,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonicModule,
  SelectValueAccessorDirective
} from "./chunk-V5JFS32A.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-ULJI5CAD.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-XCBA4FSK.js";
import {
  ChangeDetectionStrategy,
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
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4LZZ5H7X.js";

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
function TablaVehiculosComponent_Conditional_6_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 14);
    \u0275\u0275listener("click", function TablaVehiculosComponent_Conditional_6_Conditional_0_For_3_Template_ion_item_click_0_listener() {
      const coche_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.seleccionarCoche(coche_r4));
    });
    \u0275\u0275elementStart(1, "ion-label", 15)(2, "div", 16);
    \u0275\u0275element(3, "img", 17);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "ion-radio", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const coche_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.isCocheSeleccionado(coche_r4));
    \u0275\u0275attribute("aria-checked", ctx_r1.isCocheSeleccionado(coche_r4));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.mostrarColorCoche(coche_r4.color))("alt", \u0275\u0275pipeBind2(4, 9, "TABLA_VEHICULOS.SELECTOR.COLOR_VEHICULO", \u0275\u0275pureFunction1(12, _c0, coche_r4.color)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", coche_r4.marca, " ", coche_r4.modelo);
    \u0275\u0275advance();
    \u0275\u0275property("value", coche_r4);
    \u0275\u0275attribute("aria-label", coche_r4.marca + " " + coche_r4.modelo + ", " + coche_r4.color);
  }
}
function TablaVehiculosComponent_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-list", 7)(1, "ion-radio-group", 8);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function TablaVehiculosComponent_Conditional_6_Conditional_0_Template_ion_radio_group_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.cocheSeleccionado, $event) || (ctx_r1.cocheSeleccionado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function TablaVehiculosComponent_Conditional_6_Conditional_0_Template_ion_radio_group_ionChange_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.seleccionarCoche(ctx_r1.cocheSeleccionado));
    });
    \u0275\u0275repeaterCreate(2, TablaVehiculosComponent_Conditional_6_Conditional_0_For_3_Template, 8, 14, "ion-item", 9, \u0275\u0275componentInstance().trackByVehiculo, true);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 12);
    \u0275\u0275listener("click", function TablaVehiculosComponent_Conditional_6_Conditional_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.irARegistrarVehiculo.emit());
    });
    \u0275\u0275element(9, "i", 13);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-labelledby", "titulo-vehiculos");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cocheSeleccionado);
    \u0275\u0275property("compareWith", ctx_r1.compareVehiculos);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.vehiculos);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "TABLA_VEHICULOS.ANADIR_OTRO"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 7, "BOTONES.TABLAVEHICULOS.ANADIR_VEHICULO"), " ");
  }
}
function TablaVehiculosComponent_Conditional_6_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 21)(1, "ion-label", 15)(2, "div", 16);
    \u0275\u0275element(3, "img", 17);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 24)(8, "button", 25);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("click", function TablaVehiculosComponent_Conditional_6_Conditional_1_For_2_Template_button_click_8_listener($event) {
      const coche_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.editarFilaVehiculo(coche_r6);
      ctx_r1.editarVehiculo.emit(coche_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(10, "mat-icon", 26);
    \u0275\u0275text(11, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 25);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("click", function TablaVehiculosComponent_Conditional_6_Conditional_1_For_2_Template_button_click_12_listener($event) {
      const coche_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.eliminarVehiculo.emit(coche_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(14, "mat-icon", 26);
    \u0275\u0275text(15, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const coche_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.mostrarColorCoche(coche_r6.color))("alt", \u0275\u0275pipeBind2(4, 6, "TABLA_VEHICULOS.SELECTOR.COLOR", \u0275\u0275pureFunction1(15, _c0, coche_r6.color)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", coche_r6.marca, " ", coche_r6.modelo);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(9, 9, "BOTONES.TABLAVEHICULOS.EDITAR_ARIALABEL", \u0275\u0275pureFunction3(17, _c1, coche_r6.marca, coche_r6.modelo, coche_r6.color)));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(13, 12, "BOTONES.TABLAVEHICULOS.ELIMINAR_ARIALABEL", \u0275\u0275pureFunction3(21, _c1, coche_r6.marca, coche_r6.modelo, coche_r6.color)));
  }
}
function TablaVehiculosComponent_Conditional_6_Conditional_1_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-selector-general", 34);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("seleccionCambiada", function TablaVehiculosComponent_Conditional_6_Conditional_1_For_5_Conditional_3_Template_app_selector_general_seleccionCambiada_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onMarcaChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("opciones", ctx_r1.marcasParaSelector)("valor", ctx_r1.marcaSeleccionada)("ariaLabel", \u0275\u0275pipeBind1(1, 4, "TABLA_VEHICULOS.SELECTOR.MARCA"))("soloLectura", true);
  }
}
function TablaVehiculosComponent_Conditional_6_Conditional_1_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const coche_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", coche_r9.marca, " ");
  }
}
function TablaVehiculosComponent_Conditional_6_Conditional_1_For_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-selector-general", 35);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("seleccionCambiada", function TablaVehiculosComponent_Conditional_6_Conditional_1_For_5_Conditional_6_Template_app_selector_general_seleccionCambiada_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onModeloChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("opciones", ctx_r1.modelosFiltrados)("valor", ctx_r1.modeloSeleccionado)("ariaLabel", \u0275\u0275pipeBind1(1, 4, "TABLA_VEHICULOS.SELECTOR.MODELO"))("soloLectura", true);
  }
}
function TablaVehiculosComponent_Conditional_6_Conditional_1_For_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const coche_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", coche_r9.modelo, " ");
  }
}
function TablaVehiculosComponent_Conditional_6_Conditional_1_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-selector-general", 36);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("seleccionCambiada", function TablaVehiculosComponent_Conditional_6_Conditional_1_For_5_Conditional_9_Template_app_selector_general_seleccionCambiada_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onColorChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("opciones", ctx_r1.listadoColoresUnico)("valor", ctx_r1.colorSeleccionado)("ariaLabel", \u0275\u0275pipeBind1(1, 4, "TABLA_VEHICULOS.SELECTOR.COLOR"))("soloLectura", true);
  }
}
function TablaVehiculosComponent_Conditional_6_Conditional_1_For_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 17);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const coche_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.mostrarColorCoche(coche_r9.color))("alt", \u0275\u0275pipeBind2(1, 2, "TABLA_VEHICULOS.SELECTOR.COLOR_VEHICULO", \u0275\u0275pureFunction1(5, _c0, coche_r9.color)));
  }
}
function TablaVehiculosComponent_Conditional_6_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 27)(2, "div", 28);
    \u0275\u0275conditionalCreate(3, TablaVehiculosComponent_Conditional_6_Conditional_1_For_5_Conditional_3_Template, 2, 6, "app-selector-general", 29)(4, TablaVehiculosComponent_Conditional_6_Conditional_1_For_5_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 28);
    \u0275\u0275conditionalCreate(6, TablaVehiculosComponent_Conditional_6_Conditional_1_For_5_Conditional_6_Template, 2, 6, "app-selector-general", 30)(7, TablaVehiculosComponent_Conditional_6_Conditional_1_For_5_Conditional_7_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 31);
    \u0275\u0275conditionalCreate(9, TablaVehiculosComponent_Conditional_6_Conditional_1_For_5_Conditional_9_Template, 2, 6, "app-selector-general", 32)(10, TablaVehiculosComponent_Conditional_6_Conditional_1_For_5_Conditional_10_Template, 2, 7, "img", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 33)(12, "button", 25);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("click", function TablaVehiculosComponent_Conditional_6_Conditional_1_For_5_Template_button_click_12_listener() {
      const coche_r9 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(coche_r9.editandoVehiculo ? ctx_r1.guardarVehiculoEditado(coche_r9) : ctx_r1.editarFilaVehiculo(coche_r9));
    });
    \u0275\u0275elementStart(14, "mat-icon", 26);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 25);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275listener("click", function TablaVehiculosComponent_Conditional_6_Conditional_1_For_5_Template_button_click_16_listener($event) {
      const coche_r9 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.eliminarVehiculo.emit(coche_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(18, "mat-icon", 26);
    \u0275\u0275text(19, "delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const coche_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275conditional(coche_r9.editandoVehiculo ? 3 : 4);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(coche_r9.editandoVehiculo ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(coche_r9.editandoVehiculo ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(13, 6, coche_r9.editandoVehiculo ? "BOTONES.TABLAVEHICULOS.GUARDAR_TRAS_EDITAR_ARIALABEL" : "BOTONES.TABLAVEHICULOS.EDITAR_ARIALABEL", \u0275\u0275pureFunction3(12, _c1, coche_r9.marca, coche_r9.modelo, coche_r9.color)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", coche_r9.editandoVehiculo ? "save" : "edit", " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(17, 9, "BOTONES.TABLAVEHICULOS.ELIMINAR_ARIALABEL", \u0275\u0275pureFunction3(16, _c1, coche_r9.marca, coche_r9.modelo, coche_r9.color)));
  }
}
function TablaVehiculosComponent_Conditional_6_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 12);
    \u0275\u0275listener("click", function TablaVehiculosComponent_Conditional_6_Conditional_1_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.irARegistrarVehiculo.emit());
    });
    \u0275\u0275element(2, "i", 13);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "BOTONES.TABLAVEHICULOS.ANADIR_VEHICULO"), " ");
  }
}
function TablaVehiculosComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 20);
    \u0275\u0275repeaterCreate(1, TablaVehiculosComponent_Conditional_6_Conditional_1_For_2_Template, 16, 25, "ion-item", 21, \u0275\u0275componentInstance().trackByVehiculo, true);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22);
    \u0275\u0275repeaterCreate(4, TablaVehiculosComponent_Conditional_6_Conditional_1_For_5_Template, 20, 20, "div", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TablaVehiculosComponent_Conditional_6_Conditional_1_Conditional_6_Template, 5, 3, "div", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.vehiculos);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.vehiculos);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.editandoCoche ? 6 : -1);
  }
}
function TablaVehiculosComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TablaVehiculosComponent_Conditional_6_Conditional_0_Template, 12, 9)(1, TablaVehiculosComponent_Conditional_6_Conditional_1_Template, 7, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.modoSeleccion ? 0 : 1);
  }
}
function TablaVehiculosComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 38)(5, "button", 12);
    \u0275\u0275listener("click", function TablaVehiculosComponent_Conditional_7_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.irARegistrarVehiculo.emit());
    });
    \u0275\u0275element(6, "i", 13);
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
function TablaVehiculosComponent_Conditional_8_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "button", 44);
    \u0275\u0275listener("click", function TablaVehiculosComponent_Conditional_8_Conditional_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.guardarVehiculo());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 45);
    \u0275\u0275listener("click", function TablaVehiculosComponent_Conditional_8_Conditional_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r15);
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
function TablaVehiculosComponent_Conditional_8_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 46)(2, "button", 44);
    \u0275\u0275listener("click", function TablaVehiculosComponent_Conditional_8_Conditional_16_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.guardarVehiculoEditado(ctx_r1.cocheEnEdicion));
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 47);
    \u0275\u0275listener("click", function TablaVehiculosComponent_Conditional_8_Conditional_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r16);
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
function TablaVehiculosComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 39)(2, "div", 40);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "div", 41)(5, "div", 42)(6, "app-selector-general", 34);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("seleccionCambiada", function TablaVehiculosComponent_Conditional_8_Template_app_selector_general_seleccionCambiada_6_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMarcaChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 42)(9, "app-selector-general", 35);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("seleccionCambiada", function TablaVehiculosComponent_Conditional_8_Template_app_selector_general_seleccionCambiada_9_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onModeloChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 42)(12, "app-selector-general", 36);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("seleccionCambiada", function TablaVehiculosComponent_Conditional_8_Template_app_selector_general_seleccionCambiada_12_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onColorChange($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "ion-row", 38);
    \u0275\u0275conditionalCreate(15, TablaVehiculosComponent_Conditional_8_Conditional_15_Template, 7, 7, "div", 43);
    \u0275\u0275conditionalCreate(16, TablaVehiculosComponent_Conditional_8_Conditional_16_Template, 8, 7, "div", 43);
    \u0275\u0275element(17, "div", 43);
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
    \u0275\u0275conditional(!ctx_r1.editandoCoche ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.editandoCoche ? 16 : -1);
  }
}
function TablaVehiculosComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 48);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275element(6, "i", 49);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TablaVehiculosComponent, selectors: [["app-tabla-vehiculos"]], inputs: { vehiculos: "vehiculos", modoSeleccion: "modoSeleccion", cocheSeleccionado: "cocheSeleccionado", mostrarSelectorVehiculo: "mostrarSelectorVehiculo", marcaSeleccionada: "marcaSeleccionada", modeloSeleccionado: "modeloSeleccionado", colorSeleccionado: "colorSeleccionado", matriculaNoValida: "matriculaNoValida" }, outputs: { cocheSeleccionadoChange: "cocheSeleccionadoChange", editarVehiculo: "editarVehiculo", eliminarVehiculo: "eliminarVehiculo", irARegistrarVehiculo: "irARegistrarVehiculo", vehiculoAnadidoExito: "vehiculoAnadidoExito", mostrarSelectorVehiculoChange: "mostrarSelectorVehiculoChange" }, decls: 10, vars: 6, consts: [[1, "mb-5", "container"], ["id", "titulo-vehiculos", 1, "text-center", "mb-1", "mb-sm-1", "mb-md-5"], [1, "contenedor_seccion"], [1, "contenedor_inputs"], ["role", "status", "aria-live", "polite", 1, "mensaje-sin-vehiculos", "p-2", "text-center", "card", "shadow-sm", "rounded-3"], [1, "mt-3", "d-flex", "justify-content-center"], [1, "mt-3", "info", "text-center"], ["lines", "none", "role", "radiogroup", 1, "scrollable-list", "custom-goguay-list"], [3, "ngModelChange", "ionChange", "ngModel", "compareWith"], ["tabindex", "0", 1, "goguay-list-item", 3, "selected"], [1, "d-flex", "flex-column", "align-items-center", "mt-3", "alternate-add-box"], [1, "mb-2", "text-muted", "small"], ["type", "button", 1, "btn-goguay-mini", 3, "click"], ["aria-hidden", "true", 1, "fi", "fi-rr-plus", "me-1"], ["tabindex", "0", 1, "goguay-list-item", 3, "click"], [1, "d-flex", "align-items-center"], [1, "car-icon-wrapper", "me-3"], [1, "colorCoche", 3, "src", "alt"], [1, "car-info-text"], ["slot", "end", "mode", "ios", 3, "value"], ["lines", "none", 1, "scrollable-list", "custom-goguay-list", "d-none", "d-md-block"], [1, "goguay-list-item"], [1, "cards-vehiculos", "d-flex", "flex-wrap", "gap-2", "justify-content-center", "d-md-none", "mt-3"], [1, "card", "mb-1"], ["slot", "end", 1, "d-flex", "align-items-center", "gap-2"], ["mat-icon-button", "", 1, "botones_tabla", "btn_bg", 3, "click"], ["aria-hidden", "true"], [1, "card-body"], [1, "justify-content-center", "d-flex"], ["idUnico", "marca-vehiculo", "labelKey", "", "placeholderKey", "TABLA_VEHICULOS.SELECTOR.MARCA", 3, "opciones", "valor", "ariaLabel", "soloLectura"], ["idUnico", "modelo-vehiculo", "placeholderKey", "TABLA_VEHICULOS.SELECTOR.MODELO", 3, "opciones", "valor", "ariaLabel", "soloLectura"], [1, "mt-3", "justify-content-center", "d-flex"], ["idUnico", "color-vehiculo", "placeholderKey", "TABLA_VEHICULOS.SELECTOR.COLOR", 3, "opciones", "valor", "ariaLabel", "soloLectura"], [1, "text-center", "d-flex", "justify-content-center", "gap-2"], ["idUnico", "marca-vehiculo", "labelKey", "", "placeholderKey", "TABLA_VEHICULOS.SELECTOR.MARCA", 3, "seleccionCambiada", "opciones", "valor", "ariaLabel", "soloLectura"], ["idUnico", "modelo-vehiculo", "placeholderKey", "TABLA_VEHICULOS.SELECTOR.MODELO", 3, "seleccionCambiada", "opciones", "valor", "ariaLabel", "soloLectura"], ["idUnico", "color-vehiculo", "placeholderKey", "TABLA_VEHICULOS.SELECTOR.COLOR", 3, "seleccionCambiada", "opciones", "valor", "ariaLabel", "soloLectura"], [1, "text-muted"], [1, "mt-3"], [1, "bloque-selectores"], ["role", "group"], [1, "row", "d-flex", "justify-content-center"], [1, "col-12", "col-md-4", "mb-2", "mb-md-0"], [1, "container", "d-flex", "justify-content-center", "mt-2"], ["type", "button", "mat-raised-button", "", 1, "btn", "btn_bg", 3, "click", "disabled"], ["type", "button", "mat-raised-button", "", 1, "btn", "btn_bg", "ms-2", 3, "click"], [1, "d-flex", "justify-content-center", "gap-3", "mt-2"], ["type", "button", "mat-raised-button", "", 1, "btn", "btn_bg", 3, "click"], ["href", "mailto:gestion.goguay@gmail.com", 1, "link-item"], ["aria-hidden", "true", 1, "fi", "fi-rr-envelope", "ms-2"]], template: function TablaVehiculosComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "div", 3);
      \u0275\u0275conditionalCreate(6, TablaVehiculosComponent_Conditional_6_Template, 2, 1)(7, TablaVehiculosComponent_Conditional_7_Template, 9, 6, "div", 4);
      \u0275\u0275conditionalCreate(8, TablaVehiculosComponent_Conditional_8_Template, 18, 23, "div", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(9, TablaVehiculosComponent_Conditional_9_Template, 8, 6, "div", 6);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "TABLA_VEHICULOS.TITULO"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.vehiculos && ctx.vehiculos.length > 0 ? 6 : 7);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.mostrarSelectorVehiculo ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mostrarSelectorVehiculo ? 9 : -1);
    }
  }, dependencies: [IonicModule, IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, IonRow, SelectValueAccessorDirective, FormsModule, NgControlStatus, NgModel, TranslateModule, MatIcon, MatFormFieldModule, SelectorGeneralComponent, TranslatePipe], styles: ['@charset "UTF-8";\n\n\n.contenedor_seccion[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.colorCoche[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 50px;\n  border-radius: 4px;\n}\n.bloque-selectores[_ngcontent-%COMP%] {\n  width: 800px;\n  margin: 0 auto;\n}\n.bloque-selectores[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.car-icon-wrapper[_ngcontent-%COMP%] {\n  padding: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.alternate-add-box[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.goguay-list-item[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  --%NS%background: transparent;\n  --%NS%padding-start: 12px;\n  --%NS%inner-padding-end: 12px;\n  --%NS%min-height: 56px;\n  border-radius: 16px !important;\n  margin-bottom: 4px;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.goguay-list-item[_ngcontent-%COMP%]::part(native) {\n  border-radius: 16px !important;\n}\n.goguay-list-item.selected[_ngcontent-%COMP%] {\n  --%NS%background: #f0d7b4;\n}\n.goguay-list-item[_ngcontent-%COMP%]:hover {\n  --%NS%background: #f0d7b456;\n  transform: translateY(-2px);\n}\n.goguay-list-item[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%] {\n  --%NS%color: #b0b0b0;\n  --%NS%color-checked: #e0a667;\n  margin-inline-end: 4px;\n}\n.goguay-list-item[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]::part(mark) {\n  border-color: #111111 !important;\n}\n.goguay-list-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 0.95rem !important;\n  color: #111111;\n}\n.goguay-list-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.78rem !important;\n  line-height: 1.3;\n}\n.custom-goguay-list[_ngcontent-%COMP%] {\n  background: white !important;\n  border-radius: 24px !important;\n  padding: 8px !important;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28) !important;\n  border: 1px solid #f6f6f6;\n  max-width: 450px !important;\n  margin: 0 auto !important;\n}\n.btn-goguay-mini[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #e0a667;\n  border: 1px solid #e0a667;\n  padding: 6px 16px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  border-radius: 35px;\n  box-shadow: 0 4px 12px rgba(224, 166, 103, 0.1);\n  transition: all 0.2s ease;\n}\n.btn-goguay-mini[_ngcontent-%COMP%]:hover {\n  background-color: #e0a567;\n  color: #ffffff;\n  box-shadow: 0 6px 16px rgba(224, 166, 103, 0.2);\n}\n.botones_tabla[_ngcontent-%COMP%] {\n  border-radius: 15%;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.cards-vehiculos[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  width: 20%;\n  min-width: 110px;\n  height: 150px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n  border-radius: 35px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);\n  padding: 10px;\n  margin-bottom: 12px;\n}\n.cards-vehiculos[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  padding: 0;\n}\n.cards-vehiculos[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.cards-vehiculos[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(.text-center) {\n  font-size: 0.85rem;\n  line-height: 1.1;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.cards-vehiculos[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%], \n.cards-vehiculos[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   div[cass*=text-center][_ngcontent-%COMP%], \n.cards-vehiculos[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  margin-top: auto;\n}\n.cards-vehiculos[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   select.form-select[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding: 0.25rem 0.3rem;\n  height: 25px;\n}\n.info[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 0.9rem;\n}\na[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n}\n@media (max-width: 767px) {\n  .tabla-vehiculos[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 0.85rem;\n  }\n  .tabla-vehiculos[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .tabla-vehiculos[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 6px 8px;\n  }\n  .acciones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 4px;\n    min-width: 28px;\n    min-height: 28px;\n  }\n  .cards-vehiculos[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   select.form-select[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    line-height: 1.2;\n    padding: 0.25rem 0.3rem;\n    height: 32px;\n    transform: scale(0.9);\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n  .cards-vehiculos[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   select.form-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=tabla-vehiculos.component.css.map */'], changeDetection: 1 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TablaVehiculosComponent, [{
    type: Component,
    args: [{ selector: "app-tabla-vehiculos", standalone: true, changeDetection: ChangeDetectionStrategy.Eager, imports: [IonicModule, FormsModule, TranslateModule, MatIcon, MatFormFieldModule, SelectorGeneralComponent], template: `<div class="mb-5 container">
  <h4
    class="text-center mb-1 mb-sm-1 mb-md-5"
    id="titulo-vehiculos"
  >
    {{ 'TABLA_VEHICULOS.TITULO' | translate }}
  </h4>
  <div class="contenedor_seccion">
    <div class="contenedor_inputs">
      @if (vehiculos && vehiculos.length > 0) {
        <!-- MODO SELECCI\xD3N (Crear Viaje) -->
        @if (modoSeleccion) {
          <ion-list
            class="scrollable-list custom-goguay-list"
            lines="none"
            role="radiogroup"
            [attr.aria-labelledby]="'titulo-vehiculos'"
          >
            <ion-radio-group
              [(ngModel)]="cocheSeleccionado"
              [compareWith]="compareVehiculos"
              (ionChange)="seleccionarCoche(cocheSeleccionado)"
            >
              @for (coche of vehiculos; track trackByVehiculo($index, coche)) {
                <ion-item
                  (click)="seleccionarCoche(coche)"
                  class="goguay-list-item"
                  [class.selected]="isCocheSeleccionado(coche)"
                  [attr.aria-checked]="isCocheSeleccionado(coche)"
                  tabindex="0"
                >
                  <ion-label class="d-flex align-items-center">
                    <div class="car-icon-wrapper me-3">
                      <img
                        class="colorCoche"
                        [src]="mostrarColorCoche(coche.color)"
                        [alt]="'TABLA_VEHICULOS.SELECTOR.COLOR_VEHICULO' | translate: { color: coche.color }"
                      />
                    </div>
                    <span class="car-info-text">{{ coche.marca }} {{ coche.modelo }}</span>
                  </ion-label>
                  <ion-radio
                    slot="end"
                    [value]="coche"
                    mode="ios"
                    [attr.aria-label]="coche.marca + ' ' + coche.modelo + ', ' + coche.color"
                  ></ion-radio>
                </ion-item>
              }
            </ion-radio-group>
          </ion-list>
          <div class="d-flex flex-column align-items-center mt-3 alternate-add-box">
            <p class="mb-2 text-muted small">
              {{ 'TABLA_VEHICULOS.ANADIR_OTRO' | translate }}
            </p>
            <button
              type="button"
              class="btn-goguay-mini"
              (click)="irARegistrarVehiculo.emit()"
            >
              <i
                class="fi fi-rr-plus me-1"
                aria-hidden="true"
              ></i>
              {{ 'BOTONES.TABLAVEHICULOS.ANADIR_VEHICULO' | translate }}
            </button>
          </div>
        } @else {
          <ion-list
            class="scrollable-list custom-goguay-list d-none d-md-block"
            lines="none"
          >
            @for (coche of vehiculos; track trackByVehiculo($index, coche)) {
              <ion-item class="goguay-list-item">
                <ion-label class="d-flex align-items-center">
                  <div class="car-icon-wrapper me-3">
                    <img
                      class="colorCoche"
                      [src]="mostrarColorCoche(coche.color)"
                      [alt]="'TABLA_VEHICULOS.SELECTOR.COLOR' | translate: { color: coche.color }"
                    />
                  </div>
                  <span class="car-info-text">{{ coche.marca }} {{ coche.modelo }}</span>
                </ion-label>
                <!-- Botones de Editar y Eliminar (Solo en Mi Perfil) -->
                <div
                  class="d-flex align-items-center gap-2"
                  slot="end"
                >
                  <button
                    mat-icon-button
                    class="botones_tabla btn_bg"
                    [attr.aria-label]="
                      'BOTONES.TABLAVEHICULOS.EDITAR_ARIALABEL'
                        | translate
                          : {
                              marca: coche.marca,
                              modelo: coche.modelo,
                              color: coche.color,
                            }
                    "
                    (click)="editarFilaVehiculo(coche); editarVehiculo.emit(coche); $event.stopPropagation()"
                  >
                    <mat-icon aria-hidden="true">edit</mat-icon>
                  </button>
                  <button
                    mat-icon-button
                    [attr.aria-label]="
                      'BOTONES.TABLAVEHICULOS.ELIMINAR_ARIALABEL'
                        | translate
                          : {
                              marca: coche.marca,
                              modelo: coche.modelo,
                              color: coche.color,
                            }
                    "
                    class="botones_tabla btn_bg"
                    (click)="eliminarVehiculo.emit(coche); $event.stopPropagation()"
                  >
                    <mat-icon aria-hidden="true">delete</mat-icon>
                  </button>
                </div>
              </ion-item>
            }
          </ion-list>
          <!-- Cards para dispositivos moviles -->
          <div class="cards-vehiculos d-flex flex-wrap gap-2 justify-content-center d-md-none mt-3">
            @for (coche of vehiculos; track coche) {
              <div class="card mb-1">
                <div class="card-body">
                  <div class="justify-content-center d-flex">
                    @if (coche.editandoVehiculo) {
                      <app-selector-general
                        idUnico="marca-vehiculo"
                        labelKey=""
                        placeholderKey="TABLA_VEHICULOS.SELECTOR.MARCA"
                        [opciones]="marcasParaSelector"
                        [valor]="marcaSeleccionada"
                        (seleccionCambiada)="onMarcaChange($event)"
                        [ariaLabel]="'TABLA_VEHICULOS.SELECTOR.MARCA' | translate"
                        [soloLectura]="true"
                      ></app-selector-general>
                    } @else {
                      {{ coche.marca }}
                    }
                  </div>
                  <div class="justify-content-center d-flex">
                    @if (coche.editandoVehiculo) {
                      <app-selector-general
                        idUnico="modelo-vehiculo"
                        placeholderKey="TABLA_VEHICULOS.SELECTOR.MODELO"
                        [opciones]="modelosFiltrados"
                        [valor]="modeloSeleccionado"
                        (seleccionCambiada)="onModeloChange($event)"
                        [ariaLabel]="'TABLA_VEHICULOS.SELECTOR.MODELO' | translate"
                        [soloLectura]="true"
                      ></app-selector-general>
                    } @else {
                      {{ coche.modelo }}
                    }
                  </div>
                  <div class="mt-3 justify-content-center d-flex">
                    @if (coche.editandoVehiculo) {
                      <app-selector-general
                        idUnico="color-vehiculo"
                        placeholderKey="TABLA_VEHICULOS.SELECTOR.COLOR"
                        [opciones]="listadoColoresUnico"
                        [valor]="colorSeleccionado"
                        (seleccionCambiada)="onColorChange($event)"
                        [ariaLabel]="'TABLA_VEHICULOS.SELECTOR.COLOR' | translate"
                        [soloLectura]="true"
                      ></app-selector-general>
                    } @else {
                      <img
                        class="colorCoche"
                        [src]="mostrarColorCoche(coche.color)"
                        [alt]="'TABLA_VEHICULOS.SELECTOR.COLOR_VEHICULO' | translate: { color: coche.color }"
                      />
                    }
                  </div>
                  <div class="text-center d-flex justify-content-center gap-2">
                    <button
                      mat-icon-button
                      class="botones_tabla btn_bg"
                      (click)="coche.editandoVehiculo ? guardarVehiculoEditado(coche) : editarFilaVehiculo(coche)"
                      [attr.aria-label]="
                        (coche.editandoVehiculo
                          ? 'BOTONES.TABLAVEHICULOS.GUARDAR_TRAS_EDITAR_ARIALABEL'
                          : 'BOTONES.TABLAVEHICULOS.EDITAR_ARIALABEL'
                        ) | translate: { marca: coche.marca, modelo: coche.modelo, color: coche.color }
                      "
                    >
                      <mat-icon aria-hidden="true">
                        {{ coche.editandoVehiculo ? 'save' : 'edit' }}
                      </mat-icon>
                    </button>
                    <button
                      mat-icon-button
                      class="botones_tabla btn_bg"
                      (click)="eliminarVehiculo.emit(coche); $event.stopPropagation()"
                      [attr.aria-label]="
                        'BOTONES.TABLAVEHICULOS.ELIMINAR_ARIALABEL'
                          | translate
                            : {
                                marca: coche.marca,
                                modelo: coche.modelo,
                                color: coche.color,
                              }
                      "
                    >
                      <mat-icon aria-hidden="true">delete</mat-icon>
                    </button>
                  </div>
                </div>
              </div>
            }
          </div>
          <!-- Bot\xF3n de a\xF1adir veh\xEDculo tambi\xE9n visible en Mi Perfil -->
          @if (!editandoCoche) {
            <div class="d-flex flex-column align-items-center mt-3 alternate-add-box">
              <button
                type="button"
                class="btn-goguay-mini"
                (click)="irARegistrarVehiculo.emit()"
              >
                <i
                  class="fi fi-rr-plus me-1"
                  aria-hidden="true"
                ></i>
                {{ 'BOTONES.TABLAVEHICULOS.ANADIR_VEHICULO' | translate }}
              </button>
            </div>
          }
        }
        <!-- MODO PERFIL (Mi Perfil: con Editar, Eliminar y bot\xF3n de a\xF1adir) -->
      } @else {
        <div
          class="mensaje-sin-vehiculos p-2 text-center card shadow-sm rounded-3"
          role="status"
          aria-live="polite"
        >
          <p class="text-muted">
            {{ 'TABLA_VEHICULOS.SIN_VEHICULOS' | translate }}
          </p>
          <div class="mt-3">
            <button
              type="button"
              class="btn-goguay-mini"
              (click)="irARegistrarVehiculo.emit()"
            >
              <i
                class="fi fi-rr-plus me-1"
                aria-hidden="true"
              ></i>
              {{ 'BOTONES.TABLAVEHICULOS.ANADIR_VEHICULO' | translate }}
            </button>
          </div>
        </div>
        <!--Selector de marca, modelo y color de vehiculos y bot\xF3n para guardar vehiculo-->
      }

      @if (mostrarSelectorVehiculo) {
        <div class="mt-3 d-flex justify-content-center">
          <div class="bloque-selectores">
            <div
              role="group"
              [attr.aria-label]="'TABLA_VEHICULOS.TITULO' | translate"
            >
              <div class="row d-flex justify-content-center">
                <!-- Selector de marca -->
                <div class="col-12 col-md-4 mb-2 mb-md-0">
                  <app-selector-general
                    idUnico="marca-vehiculo"
                    labelKey=""
                    placeholderKey="TABLA_VEHICULOS.SELECTOR.MARCA"
                    [opciones]="marcasParaSelector"
                    [valor]="marcaSeleccionada"
                    (seleccionCambiada)="onMarcaChange($event)"
                    [ariaLabel]="'TABLA_VEHICULOS.SELECTOR.MARCA' | translate"
                    [soloLectura]="true"
                  ></app-selector-general>
                </div>
                <!-- Selector de modelo -->
                <div class="col-12 col-md-4 mb-2 mb-md-0">
                  <app-selector-general
                    idUnico="modelo-vehiculo"
                    placeholderKey="TABLA_VEHICULOS.SELECTOR.MODELO"
                    [opciones]="modelosFiltrados"
                    [valor]="modeloSeleccionado"
                    (seleccionCambiada)="onModeloChange($event)"
                    [ariaLabel]="'TABLA_VEHICULOS.SELECTOR.MODELO' | translate"
                    [soloLectura]="true"
                  ></app-selector-general>
                </div>
                <!-- Selector de color -->
                <div class="col-12 col-md-4 mb-2 mb-md-0">
                  <app-selector-general
                    idUnico="color-vehiculo"
                    placeholderKey="TABLA_VEHICULOS.SELECTOR.COLOR"
                    [opciones]="listadoColoresUnico"
                    [valor]="colorSeleccionado"
                    (seleccionCambiada)="onColorChange($event)"
                    [ariaLabel]="'TABLA_VEHICULOS.SELECTOR.COLOR' | translate"
                    [soloLectura]="true"
                  ></app-selector-general>
                </div>
              </div>
            </div>
            <ion-row class="mt-3">
              @if (!editandoCoche) {
                <div class="container d-flex justify-content-center mt-2">
                  <button
                    type="button"
                    [disabled]="!marcaSeleccionada || !modeloSeleccionado || !colorSeleccionado"
                    class="btn btn_bg"
                    mat-raised-button
                    (click)="guardarVehiculo()"
                  >
                    {{ 'BOTONES.TABLAVEHICULOS.GUARDAR_VEHICULO' | translate }}
                  </button>
                  <!-- Boton para cancelar el guardado de un veh\xEDculo nuevo -->
                  <button
                    type="button"
                    class="btn btn_bg ms-2"
                    mat-raised-button
                    (click)="cancelarCoche()"
                  >
                    {{ 'BOTONES.TABLAVEHICULOS.CANCELAR' | translate }}
                  </button>
                </div>
              }
              @if (editandoCoche) {
                <div class="container d-flex justify-content-center mt-2">
                  <div class="d-flex justify-content-center gap-3 mt-2">
                    <!-- Bot\xF3n para guardar un coche tras editarlo -->
                    <button
                      type="button"
                      [disabled]="!marcaSeleccionada || !modeloSeleccionado || !colorSeleccionado"
                      class="btn btn_bg"
                      mat-raised-button
                      (click)="guardarVehiculoEditado(cocheEnEdicion)"
                    >
                      {{ 'BOTONES.TABLAVEHICULOS.GUARDAR_VEHICULO' | translate }}
                    </button>
                    <!-- Bot\xF3n para cancelar un nuevo coche o coche editando -->
                    <button
                      type="button"
                      class="btn btn_bg"
                      mat-raised-button
                      (click)="cancelarCoche()"
                    >
                      {{ 'BOTONES.TABLAVEHICULOS.CANCELAR' | translate }}
                    </button>
                  </div>
                </div>
              }
              <div class="container d-flex justify-content-center mt-2"></div>
            </ion-row>
          </div>
        </div>
      }
    </div>
  </div>
</div>

@if (mostrarSelectorVehiculo) {
  <div class="mt-3 info text-center">
    <span class="mt-3">{{ 'TABLA_VEHICULOS.INFO' | translate }}</span>
    <a
      href="mailto:gestion.goguay&#64;gmail.com"
      class="link-item"
      [attr.aria-label]="'TABLA_VEHICULOS.ENVIAR_CORREO' | translate"
    >
      <i
        class="fi fi-rr-envelope ms-2"
        aria-hidden="true"
      ></i>
      gestion.goguay&#64;gmail.com
    </a>
  </div>
}
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
//# debugId=80fbf354-838c-51fe-9494-c6b2046212ef
//# sourceMappingURL=chunk-DVA27U6Q.js.map
