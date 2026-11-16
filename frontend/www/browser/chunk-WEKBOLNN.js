import {
  FuncionesComunes,
  VehiculosServicesService
} from "./chunk-TMB2KEQX.js";
import {
  UserServicesService
} from "./chunk-34RASOLQ.js";
import {
  MatDialog
} from "./chunk-LLKVXR72.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YUKRBYLH.js";

// src/app/core/funciones-usuario/funciones-usuario.service.ts
var FuncionesUsuario = class _FuncionesUsuario {
  userService;
  funcionesComunes;
  vehiculosServices;
  dialog;
  userData = {};
  usuario = {};
  vehiculos_usuario = [];
  modificandoMarca = false;
  telefonoInvalido = false;
  botonHabilitadoMiPerfil = false;
  telefonoRef;
  constructor(userService, funcionesComunes, vehiculosServices, dialog) {
    this.userService = userService;
    this.funcionesComunes = funcionesComunes;
    this.vehiculosServices = vehiculosServices;
    this.dialog = dialog;
    this.loadUserData();
  }
  loadUserData() {
    this.userData = JSON.parse(localStorage.getItem("userData") || "{}");
  }
  /*********************************************************
   * FUNCIONES RELACIONADAS CON "MI PERFIL"                  **
   ***********************************************************
   */
  /**
   * Se obtiene un usuario a través del id
   */
  obtenerUsuario() {
    this.userService.obtenerUsuarioPorID(this.userData.usuario.id).subscribe((respuesta) => {
      this.usuario = respuesta;
      return this.usuario;
    });
  }
  /**
   * Función para calcular la edad de un usuario en función de su fecha de nacimiento
   * @param fechaNacimiento
   * @returns
   */
  calcularEdad(fechaNacimiento) {
    if (!fechaNacimiento) {
      return 0;
    }
    const fechaNac = new Date(fechaNacimiento);
    const hoy = /* @__PURE__ */ new Date();
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mesDif = hoy.getMonth() - fechaNac.getMonth();
    if (mesDif < 0 || mesDif === 0 && hoy.getDate() < fechaNac.getDate()) {
      edad--;
    }
    return edad;
  }
  static \u0275fac = function FuncionesUsuario_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FuncionesUsuario)(\u0275\u0275inject(UserServicesService), \u0275\u0275inject(FuncionesComunes), \u0275\u0275inject(VehiculosServicesService), \u0275\u0275inject(MatDialog));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FuncionesUsuario, factory: _FuncionesUsuario.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FuncionesUsuario, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: UserServicesService }, { type: FuncionesComunes }, { type: VehiculosServicesService }, { type: MatDialog }], null);
})();

export {
  FuncionesUsuario
};
//# sourceMappingURL=chunk-WEKBOLNN.js.map
