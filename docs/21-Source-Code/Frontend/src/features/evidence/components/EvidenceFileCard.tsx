import {
  File as FileIcon,
  FileImage,
  FileSpreadsheet,
  FileText,
  Presentation,
} from "lucide-react";
import type { ComponentType } from "react";

import { Card, CardContent } from "@/components/ui/card";
import type {
  EvidenceFile,
  EvidenceFileType,
} from "@/features/evidence/types/evidence-file";

interface EvidenceFileCardProps {
  file: EvidenceFile;
}

const FILE_TYPE_ICONS: Record<EvidenceFileType, ComponentType<{ className?: string }>> = {
  pdf: FileText,
  image: FileImage,
  spreadsheet: FileSpreadsheet,
  document: FileText,
  presentation: Presentation,
  other: FileIcon,
};

function formatFileSize(bytes: number): string {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  const kilobytes = bytes / 1024;
  if (kilobytes < 1024) {
    return `${kilobytes.toFixed(0)} KB`;
  }

  const megabytes = kilobytes / 1024;
  return `${megabytes.toFixed(1)} MB`;
}

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function EvidenceFileCard({ file }: EvidenceFileCardProps) {
  const Icon = FILE_TYPE_ICONS[file.fileType];

  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-4">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted"
          aria-hidden="true"
        >
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-foreground">
            {file.fileName}
          </p>
          <p className="truncate text-xs text-muted-foreground">
            {formatFileSize(file.fileSizeBytes)} · Uploaded by{" "}
            {file.uploadedBy} on {formatDate(file.uploadedAt)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}