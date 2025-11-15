from PIL import Image
import os

# Desktop path
desktop = "/Users/yjy/Desktop"

# Image files in order
image_files = [
    f"{desktop}/01-cover.png",
    f"{desktop}/02-intention.png",
    f"{desktop}/03-problem.png",
    f"{desktop}/04-concept.png",
    f"{desktop}/05-experience.png",
    f"{desktop}/06-hardware.png"
]

# Open all images
images = []
for img_path in image_files:
    if os.path.exists(img_path):
        img = Image.open(img_path)
        # Convert to RGB (PDF requires RGB)
        if img.mode == 'RGBA':
            img = img.convert('RGB')
        images.append(img)
    else:
        print(f"Warning: {img_path} not found")

# Save as PDF
if images:
    output_path = f"{desktop}/부재의_증명사진_프레젠테이션.pdf"
    images[0].save(
        output_path,
        save_all=True,
        append_images=images[1:],
        resolution=100.0,
        quality=95
    )
    print(f"PDF created successfully: {output_path}")
else:
    print("No images found to create PDF")
