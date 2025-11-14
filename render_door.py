import bpy

# 렌더 설정
bpy.context.scene.render.engine = 'CYCLES'
bpy.context.scene.cycles.samples = 128
bpy.context.scene.render.resolution_x = 1920
bpy.context.scene.render.resolution_y = 1080
bpy.context.scene.render.image_settings.file_format = 'PNG'

# 출력 경로 설정
output_path = "/Users/yjy/Desktop/cursor/blender/blender ppt/korean_door_render.png"
bpy.context.scene.render.filepath = output_path

# 렌더링 실행
bpy.ops.render.render(write_still=True)

print(f"Render completed and saved to: {output_path}")
