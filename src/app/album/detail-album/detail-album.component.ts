import { Component, Input, Output, EventEmitter } from '@angular/core';
import { album } from '../models/models';

@Component({
  selector: 'app-detail-album',
  templateUrl: './detail-album.component.html',
  styleUrls: ['./detail-album.component.css']
})
export class DetailAlbumComponent {
  @Input() album?: album | null;
  @Output() close = new EventEmitter<void>();

  exportSongs() {
    if (!this.album || !this.album.tracks) {
      return;
    }

    const csvData = this.album.tracks.map((track: any) => ({
      'Track Name': track.name,
      'Duration': `${track.minutes}:${track.seconds.toString().padStart(2, '0')}`,
      'Spotify ID': track.spotify_id,
      'Loved': track.loved ? 'Yes' : 'No'
    }));

    const csvString = this.convertToCSV(csvData);
    const filename = this.album && this.album.title ? `${this.album.title}_songs.csv` : 'songs.csv';
    this.downloadCSV(csvString, filename);
  }

  closeDetail() {
    this.close.emit();
  }

  private convertToCSV(data: any[]): string {
    if (data.length === 0) return '';

    const headers = Object.keys(data[0]);
    const csvRows = [headers.join(',')];

    data.forEach(row => {
      const values = headers.map(header => `"${row[header]}"`);
      csvRows.push(values.join(','));
    });

    return csvRows.join('\n');
  }

  private downloadCSV(csvString: string, filename: string) {
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
