"""Make web copies of the supplied photographs without changing the originals."""
from pathlib import Path
from PIL import Image, ImageOps

SOURCE = Path(__file__).resolve().parents[2]
OUTPUT = Path(__file__).resolve().parents[1] / "assets" / "images"
OUTPUT.mkdir(parents=True, exist_ok=True)

IMAGES = {
    "IMG_4147.jpeg": "room-overview",
    "IMG_4153.jpeg": "living-wide",
    "IMG_4102.jpeg": "sleeping-area",
    "IMG_4109.jpeg": "window-view",
    "IMG_4145.jpeg": "living-dining",
    "IMG_4156.jpeg": "entertainment-wall",
    "IMG_4206.jpeg": "kitchen",
    "IMG_4207.jpeg": "kitchen-appliances",
    "IMG_4227.JPG": "living-front",
    "IMG_4174.jpeg": "room-from-bed",
}

for filename, slug in IMAGES.items():
    with Image.open(SOURCE / filename) as original:
        image = ImageOps.exif_transpose(original).convert("RGB")
        for width in (720, 1440):
            resized = image.copy()
            resized.thumbnail((width, width * 2), Image.Resampling.LANCZOS)
            resized.save(OUTPUT / f"{slug}-{width}.webp", "WEBP", quality=82, method=6)
            print(slug, width, resized.size)

with Image.open(SOURCE / "IMG_4147.jpeg") as original:
    image = ImageOps.exif_transpose(original).convert("RGB")
    image.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
    image.save(OUTPUT / "hero.webp", "WEBP", quality=86, method=6)

with Image.open(SOURCE / "IMG_4153.jpeg") as original:
    image = ImageOps.exif_transpose(original).convert("RGB")
    target = (1200, 630)
    ratio = target[0] / target[1]
    width, height = image.size
    if width / height < ratio:
        new_height = int(width / ratio)
        offset = (height - new_height) // 2
        image = image.crop((0, offset, width, offset + new_height))
    else:
        new_width = int(height * ratio)
        offset = (width - new_width) // 2
        image = image.crop((offset, 0, offset + new_width, height))
    image = image.resize(target, Image.Resampling.LANCZOS)
    image.save(OUTPUT / "social.jpg", "JPEG", quality=86, optimize=True)

with Image.open(SOURCE / "line-qr.jpg") as original:
    image = ImageOps.exif_transpose(original).convert("RGB")
    image.save(OUTPUT / "line-qr.jpg", "JPEG", quality=90, optimize=True)
