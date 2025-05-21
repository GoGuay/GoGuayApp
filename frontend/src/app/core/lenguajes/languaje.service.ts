import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<string>('es');
  language$ = this.languageSubject.asObservable();

  constructor(private translate: TranslateService) {
    // Cargar el idioma guardado
    const savedLanguage = localStorage.getItem('language') || 'es';
    this.setLanguage(savedLanguage);
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
    this.languageSubject.next(lang);
  }

  getLanguage(): string {
    return this.languageSubject.getValue();
  }
}
