import bpy
import math

# 기존 오브젝트 삭제
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

# 문 파라미터
door_width = 0.8  # 80cm
door_height = 2.0  # 200cm
door_depth = 0.05  # 5cm
frame_width = 0.08  # 8cm
lattice_width = 0.025  # 2.5cm (더 얇게)
lattice_depth = 0.015  # 1.5cm

def create_box(name, location, scale):
    """박스 생성 헬퍼 함수"""
    bpy.ops.mesh.primitive_cube_add(size=1, location=location)
    obj = bpy.context.active_object
    obj.scale = scale
    obj.name = name
    return obj

def create_frame():
    """외곽 나무 프레임 생성"""
    frames = []

    # 좌측 프레임
    frames.append(create_box("Frame_Left",
                            (frame_width/2, 0, door_height/2),
                            (frame_width/2, door_depth/2, door_height/2)))

    # 우측 프레임
    frames.append(create_box("Frame_Right",
                            (door_width - frame_width/2, 0, door_height/2),
                            (frame_width/2, door_depth/2, door_height/2)))

    # 상단 프레임
    frames.append(create_box("Frame_Top",
                            (door_width/2, 0, door_height - frame_width/2),
                            (door_width/2, door_depth/2, frame_width/2)))

    # 하단 프레임
    frames.append(create_box("Frame_Bottom",
                            (door_width/2, 0, frame_width/2),
                            (door_width/2, door_depth/2, frame_width/2)))

    return frames

def create_lattice_pattern():
    """전통 창살 격자 패턴 생성 - 사진 기반"""
    lattices = []

    # 내부 영역
    inner_width = door_width - frame_width * 2
    inner_height = door_height - frame_width * 2
    start_x = frame_width
    start_z = frame_width

    # 전체를 3개 섹션으로 나눔
    # 상단: 20%, 중앙: 60%, 하단: 20%

    # === 중앙 큰 사각형 ===
    center_height = inner_height * 0.58
    center_width = inner_width * 0.60
    center_start_x = start_x + (inner_width - center_width) / 2
    center_start_z = start_z + inner_height * 0.21

    # 중앙 사각형 외곽선
    # 좌측 세로
    lattices.append(create_box("Center_Left",
                              (center_start_x, 0, center_start_z + center_height/2),
                              (lattice_width/2, lattice_depth/2, center_height/2)))
    # 우측 세로
    lattices.append(create_box("Center_Right",
                              (center_start_x + center_width, 0, center_start_z + center_height/2),
                              (lattice_width/2, lattice_depth/2, center_height/2)))
    # 상단 가로
    lattices.append(create_box("Center_Top",
                              (center_start_x + center_width/2, 0, center_start_z + center_height),
                              (center_width/2 + lattice_width/2, lattice_depth/2, lattice_width/2)))
    # 하단 가로
    lattices.append(create_box("Center_Bottom",
                              (center_start_x + center_width/2, 0, center_start_z),
                              (center_width/2 + lattice_width/2, lattice_depth/2, lattice_width/2)))

    # === 상단 섹션 (작은 격자들) ===
    top_height = inner_height * 0.19
    top_start_z = center_start_z + center_height

    # 상단 3x3 격자
    rows = 3
    cols = 3
    cell_width = inner_width / cols
    cell_height = top_height / rows

    # 세로선 (4개)
    for i in range(cols + 1):
        x = start_x + i * cell_width
        lattices.append(create_box(f"Top_V{i}",
                                  (x, 0, top_start_z + top_height/2),
                                  (lattice_width/2, lattice_depth/2, top_height/2)))

    # 가로선 (4개)
    for i in range(rows + 1):
        z = top_start_z + i * cell_height
        lattices.append(create_box(f"Top_H{i}",
                                  (start_x + inner_width/2, 0, z),
                                  (inner_width/2 + lattice_width/2, lattice_depth/2, lattice_width/2)))

    # === 하단 섹션 (작은 격자들) ===
    bottom_height = inner_height * 0.19
    bottom_start_z = start_z

    # 하단 3x3 격자
    # 세로선 (4개)
    for i in range(cols + 1):
        x = start_x + i * cell_width
        lattices.append(create_box(f"Bottom_V{i}",
                                  (x, 0, bottom_start_z + bottom_height/2),
                                  (lattice_width/2, lattice_depth/2, bottom_height/2)))

    # 가로선 (4개)
    for i in range(rows + 1):
        z = bottom_start_z + i * cell_height
        lattices.append(create_box(f"Bottom_H{i}",
                                  (start_x + inner_width/2, 0, z),
                                  (inner_width/2 + lattice_width/2, lattice_depth/2, lattice_width/2)))

    # === 좌측 섹션 ===
    side_width = (inner_width - center_width) / 2

    # 좌측 세로선 (2개)
    for i in range(2):
        x = start_x + i * side_width
        lattices.append(create_box(f"Left_V{i}",
                                  (x, 0, center_start_z + center_height/2),
                                  (lattice_width/2, lattice_depth/2, center_height/2)))

    # 좌측 가로선 (5개 - 작은 격자 효과)
    left_rows = 4
    left_cell_height = center_height / left_rows
    for i in range(left_rows + 1):
        z = center_start_z + i * left_cell_height
        lattices.append(create_box(f"Left_H{i}",
                                  (start_x + side_width/2, 0, z),
                                  (side_width/2 + lattice_width/2, lattice_depth/2, lattice_width/2)))

    # === 우측 섹션 ===
    right_start_x = center_start_x + center_width

    # 우측 세로선 (2개)
    for i in range(2):
        x = right_start_x + i * side_width
        lattices.append(create_box(f"Right_V{i}",
                                  (x, 0, center_start_z + center_height/2),
                                  (lattice_width/2, lattice_depth/2, center_height/2)))

    # 우측 가로선 (5개)
    for i in range(left_rows + 1):
        z = center_start_z + i * left_cell_height
        lattices.append(create_box(f"Right_H{i}",
                                  (right_start_x + side_width/2, 0, z),
                                  (side_width/2 + lattice_width/2, lattice_depth/2, lattice_width/2)))

    return lattices

def create_paper_panel():
    """반투명 종이/유리 패널 생성"""
    bpy.ops.mesh.primitive_plane_add(
        size=1,
        location=(door_width/2, 0, door_height/2)
    )
    panel = bpy.context.active_object
    panel.scale = (door_width/2, door_height/2, 1)
    panel.rotation_euler = (math.pi/2, 0, 0)
    panel.name = "Paper_Panel"

    return panel

def create_materials():
    """재질 생성"""
    # 나무 재질 - 어두운 갈색
    wood_mat = bpy.data.materials.new(name="Wood_Material")
    wood_mat.use_nodes = True
    nodes = wood_mat.node_tree.nodes
    nodes.clear()

    output = nodes.new('ShaderNodeOutputMaterial')
    bsdf = nodes.new('ShaderNodeBsdfPrincipled')
    bsdf.inputs['Base Color'].default_value = (0.3, 0.2, 0.12, 1.0)
    bsdf.inputs['Roughness'].default_value = 0.5
    bsdf.inputs['Metallic'].default_value = 0.0

    wood_mat.node_tree.links.new(bsdf.outputs['BSDF'], output.inputs['Surface'])

    # 종이 재질 - 반투명 흰색
    paper_mat = bpy.data.materials.new(name="Paper_Material")
    paper_mat.use_nodes = True
    nodes = paper_mat.node_tree.nodes
    nodes.clear()

    output = nodes.new('ShaderNodeOutputMaterial')
    translucent = nodes.new('ShaderNodeBsdfTranslucent')
    translucent.inputs['Color'].default_value = (0.95, 0.95, 0.92, 1.0)

    paper_mat.node_tree.links.new(translucent.outputs['BSDF'], output.inputs['Surface'])
    paper_mat.blend_method = 'BLEND'

    return wood_mat, paper_mat

# 문 생성
print("Creating Korean traditional door v2...")

frames = create_frame()
lattices = create_lattice_pattern()
panel = create_paper_panel()

# 재질 생성 및 적용
wood_mat, paper_mat = create_materials()

# 프레임과 창살에 나무 재질 적용
for obj in frames + lattices:
    if obj.data.materials:
        obj.data.materials[0] = wood_mat
    else:
        obj.data.materials.append(wood_mat)

# 종이 패널에 종이 재질 적용
if panel.data.materials:
    panel.data.materials[0] = paper_mat
else:
    panel.data.materials.append(paper_mat)

# 카메라 설정 - 정면에서 문 전체가 보이도록
bpy.ops.object.camera_add(location=(door_width/2, -2.5, door_height/2))
camera = bpy.context.active_object
# 문을 정면으로 바라보도록 설정
camera.rotation_euler = (math.radians(90), 0, 0)
bpy.context.scene.camera = camera

# 카메라 렌즈 설정
camera.data.lens = 50  # 50mm 렌즈

# 조명 설정
# 태양광
bpy.ops.object.light_add(type='SUN', location=(5, -5, 10))
sun = bpy.context.active_object
sun.data.energy = 3
sun.rotation_euler = (math.radians(45), 0, math.radians(30))

# 정면 조명
bpy.ops.object.light_add(type='AREA', location=(door_width/2, -2, door_height/2))
front_light = bpy.context.active_object
front_light.data.energy = 200
front_light.data.size = 2

# 후면 조명 (반투명 효과)
bpy.ops.object.light_add(type='AREA', location=(door_width/2, 1.5, door_height/2))
back_light = bpy.context.active_object
back_light.data.energy = 150
back_light.data.size = 2.5

# 월드 배경
world = bpy.data.worlds.get('World')
if world:
    world.use_nodes = True
    bg = world.node_tree.nodes.get('Background')
    if bg:
        bg.inputs['Color'].default_value = (0.9, 0.9, 0.9, 1.0)
        bg.inputs['Strength'].default_value = 0.8

print("Korean traditional door v2 created successfully!")

# .blend 파일로 저장
output_path = "/Users/yjy/Desktop/cursor/blender/blender ppt/korean_door.blend"
bpy.ops.wm.save_as_mainfile(filepath=output_path)
print(f"File saved to: {output_path}")
