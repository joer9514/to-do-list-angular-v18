import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideRouter } from '@angular/router';
import { TaskRepository } from '@core/task/domain/repositories/task.repository';
import { TaskRepositoryImplementation } from '@core/task/infraestructure/repositories/task.repository.implementation';
import { environment } from '@environments/environment';
import { routes } from '@ui/pages/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    { provide: TaskRepository, useClass: TaskRepositoryImplementation },
  ],
};
