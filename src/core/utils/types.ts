export interface DrawOptions {
  fillColor?: string;
  edgingWidth?: number;
  edgingColor?: string;
}

export type DrawOptionsExtended = DrawOptions & {
  startAngle?: number;
  endAngle?: number;
}

export interface DrawImageOptions {
  smooth?: boolean;
  smoothingQuality?: 'high' | 'low' | 'medium';
}

export type ErrorHandlerFunc = (error: string) => void;
