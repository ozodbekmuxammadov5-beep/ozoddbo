import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface StatCard {
  label: string;
  value: string;
  note: string;
}

interface ActivityRow {
  id: string;
  service: string;
  status: string;
  amount: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  stats: StatCard[] = [
    { label: 'Faol mijozlar', value: '1,248', note: 'Oylik o‘sish +12%' },
    { label: 'Kirim', value: '27,300', note: 'Kunlik natija +8%' },
    { label: 'Hisobotlar', value: '18', note: 'Yangi hisobotlar' },
    { label: 'Bildirishnomalar', value: '7', note: 'Ko‘rib chiqish kerak' }
  ];

  recent: ActivityRow[] = [
    { id: 'TX-8141', service: 'Hisobni to‘ldirish', status: 'Yakunlandi', amount: '+5,000' },
    { id: 'TX-8104', service: 'To‘lov', status: 'Kutilmoqda', amount: '-1,250' },
    { id: 'TX-8092', service: 'Hisobot yaratish', status: 'Tugallandi', amount: '+0' },
    { id: 'TX-8075', service: 'Profil yangilash', status: 'Ko‘rib chiqilmoqda', amount: '+0' }
  ];

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }
}
