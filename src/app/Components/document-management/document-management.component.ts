import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-document-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './document-management.component.html',
  styleUrl: './document-management.component.scss'
})
export class DocumentManagementComponent {
  documents: Array<{ name: string; meetingName:string, url: string; type: string; time: string }> = [
    { name: 'Document1.pdf',meetingName:"Board Meeting", url: '#', type: 'pdf', time: '2025-01-22 10:00 AM' },
    { name: 'Spreadsheet1.xlsx',meetingName:"Board Meeting", url: '#', type: 'excel', time: '2025-01-22 10:15 AM' },
    { name: 'Image1.jpg',meetingName:"Board Meeting", url: '#', type: 'image', time: '2025-01-22 10:30 AM' },
    { name: 'Presentation1.pptx',meetingName:"Board Meeting", url: '#', type: 'powerpoint', time: '2025-01-22 10:45 AM' },
  ];
  selectedFile: File | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onUpload(): void {
    if (!this.selectedFile) return;

    const newDoc = {
      name: this.selectedFile.name,
      meetingName:"Board Meeting",
      url: URL.createObjectURL(this.selectedFile), // Temporary URL for preview
      type: this.getFileType(this.selectedFile.name),
      time: new Date().toLocaleString()
    };
    this.documents.push(newDoc);
    this.selectedFile = null;

    // Clear file input
    const input = document.getElementById('fileInput') as HTMLInputElement;
    if (input) {
      input.value = '';
    }
  }

  onPreview(url: string): void {
    window.open(url, '_blank'); // Open the document in a new tab
  }

  onDelete(index: number): void {
    this.documents.splice(index, 1); // Remove the document from the list
  }

  getFileType(fileName: string): string {
    const extension = fileName.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'pdf': return 'pdf';
      case 'xls': case 'xlsx': return 'excel';
      case 'jpg': case 'jpeg': case 'png': return 'image';
      case 'ppt': case 'pptx': return 'powerpoint';
      default: return 'file';
    }
  }

  getIconClass(type: string): string {
    switch (type) {
      case 'pdf': return 'bi bi-file-earmark-pdf text-danger';
      case 'excel': return 'bi bi-file-earmark-excel text-success';
      case 'image': return 'bi bi-file-earmark-image text-primary';
      case 'powerpoint': return 'bi bi-file-earmark-slides text-warning';
      default: return 'bi bi-file-earmark';
    }
  }
}
