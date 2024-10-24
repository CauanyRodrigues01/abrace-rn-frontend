import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NgOptimizedImage } from '@angular/common';
import { BotaoComponent } from '../../components/botao/botao.component';

@Component({
  selector: 'app-doar-dinheiro',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgOptimizedImage, BotaoComponent],
  templateUrl: './doar-dinheiro.component.html',
  styleUrl: './doar-dinheiro.component.scss',
})
export class DoarDinheiroComponent {}
