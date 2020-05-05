import { DrawOptions, DrawOptionsExtended, DrawImageOptions } from './types';
import { ImageProps } from '../components/types';

function drawCircle(
  ctx: CanvasRenderingContext2D,
  dotX: number,
  dotY: number,
  radius: number,
  options: Omit<DrawOptionsExtended, 'startAngle' | 'endAngle'> = {},
): void {
  drawArc(
    ctx,
    dotX,
    dotY,
    radius,
    {
      ...options,
      startAngle: 0,
      endAngle: Math.PI * 2,
    },
  );
}

function drawSector(
  ctx: CanvasRenderingContext2D,
  dotX: number,
  dotY: number,
  radius: number,
  options: DrawOptionsExtended = {},
): void {
  ctx.beginPath();
  ctx.moveTo(dotX, dotY);
  ctx.arc(dotX, dotY, radius, options.startAngle, options.endAngle);
  ctx.lineTo(dotX, dotY);
  ctx.closePath();

  if (options.fillColor) {
    ctx.fillStyle = options.fillColor;

    ctx.fill();
  }

  if (options.edgingWidth) {
    ctx.lineWidth = options.edgingWidth;
    ctx.strokeStyle = options.edgingColor || 'rgba(0, 0, 0, 0)';

    ctx.stroke();
  }
}

function drawArc(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  options: DrawOptionsExtended = {},
): void {
  ctx.beginPath();
  ctx.arc(cx, cy, radius, options.startAngle, options.endAngle);

  if (options.fillColor) {
    ctx.fillStyle = options.fillColor;

    ctx.fill();
  }

  if (options.edgingWidth) {
    ctx.lineWidth = options.edgingWidth;
    ctx.strokeStyle = options.edgingColor || 'rgba(0, 0, 0, 0)';

    ctx.stroke();
  }
}

function drawLineToAngle(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  length: number,
  angle: number,
  options: Omit<DrawOptions, 'fillColor'> = {},
): number[][] {
  const a = angle * Math.PI / 180;
  const x2 = x1 + length * Math.cos(a);
  const y2 = y1 + length * Math.sin(a);

  ctx.strokeStyle = options.edgingColor;
  ctx.lineWidth = options.edgingWidth;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  return [
    [x1, y1],
    [x2, y2],
  ];
}

function drawStar(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  spikes: number,
  outerRadius: number,
  innerRadius: number,
  options: DrawOptions = {},
): void {
  const step = Math.PI / spikes;
  let rotation: number = Math.PI / 2 * 3;
  let x: number = cx;
  let y: number = cy;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);

  for (let i = 0; i < spikes; i += 1) {
    x = cx + Math.cos(rotation) * outerRadius;
    y = cy + Math.sin(rotation) * outerRadius;
    ctx.lineTo(x, y);
    rotation += step;

    x = cx + Math.cos(rotation) * innerRadius;
    y = cy + Math.sin(rotation) * innerRadius;
    ctx.lineTo(x, y);
    rotation += step;
  }

  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();

  if (options.edgingWidth) {
    ctx.lineWidth = options.edgingWidth;
    ctx.strokeStyle = options.edgingColor || 'rgba(0, 0, 0, 0)';

    ctx.stroke();
  }

  if (options.fillColor) {
    ctx.fillStyle = options.fillColor;

    ctx.fill();
  }
}

function drawRectangle(
  ctx: CanvasRenderingContext2D,
  left: number,
  top: number,
  width: number,
  height: number,
  options: DrawOptions = {},
): void {
  if (options.fillColor) {
    ctx.fillStyle = options.fillColor;

    ctx.fillRect(left, top, width, height);
  }

  if (options.edgingWidth) {
    ctx.lineWidth = options.edgingWidth;
    ctx.strokeStyle = options.edgingColor || 'rgba(0, 0, 0, 0)';

    ctx.strokeRect(left, top, width, height);
  }
}

function drawTriangle(
  ctx: CanvasRenderingContext2D,
  c1: number[],
  c2: number[],
  c3: number[],
  options: DrawOptions = {},
): void {
  ctx.beginPath();
  ctx.moveTo(c1[0], c1[1]);
  ctx.lineTo(c2[0], c2[1]);
  ctx.lineTo(c3[0], c3[1]);
  ctx.closePath();

  if (options.fillColor) {
    ctx.fillStyle = options.fillColor;

    ctx.fill();
  }

  if (options.edgingWidth) {
    ctx.lineWidth = options.edgingWidth;
    ctx.strokeStyle = options.edgingColor || 'rgba(0, 0, 0, 0)';

    ctx.stroke();
  }
}

function drawImage(
  ctx: CanvasRenderingContext2D,
  image: ImageProps,
  left: number,
  top: number,
  imageWidth: number,
  imageHeight: number,
  options: DrawImageOptions = {},
): void {
  if (options.smooth !== undefined) {
    ctx.imageSmoothingEnabled = options.smooth;
  }

  if (options.smoothingQuality) {
    ctx.imageSmoothingQuality = options.smoothingQuality;
  }

  ctx.drawImage(
    image && image.loaded ? image.element : new Image(),
    left,
    top,
    imageWidth,
    imageHeight,
  );
}

export {
  drawCircle,
  drawSector,
  drawArc,
  drawLineToAngle,
  drawStar,
  drawRectangle,
  drawTriangle,
  drawImage,
};
