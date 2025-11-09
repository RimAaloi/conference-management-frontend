// src/app/primeng/config/primeng.config.ts
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura'; // 🎨 thème moderne

export const PrimeNGProviders = [
  providePrimeNG({
    theme: {
      preset: Aura
    },
    ripple: true, // ✅ effet d’animation sur les boutons et éléments
    translation: {
      // Boutons et actions
      accept: 'Oui',
      reject: 'Non',
      choose: 'Choisir',
      upload: 'Uploader',
      cancel: 'Annuler',
      clear: 'Effacer',

      // Dates et calendrier
      dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
      dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
      dayNamesMin: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
      monthNames: [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
      ],
      monthNamesShort: [
        'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun',
        'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'
      ],
      today: 'Aujourd\'hui',
      weekHeader: 'Sem',
      firstDayOfWeek: 1,

      // DataTable
      emptyMessage: 'Aucun enregistrement trouvé',
      emptyFilterMessage: 'Aucun enregistrement trouvé',

    }
  })
];
