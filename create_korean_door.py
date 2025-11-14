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
lattice_width = 0.03  # 3cm
lattice_depth = 0.02  # 2cm

def create_frame():
    """외곽 나무 프레임 생성"""
    # 외곽 프레임 4개 (상하좌우)
    frames = []

    # 좌측 프레임
    bpy.ops.mesh.primitive_cube_add(
        size=1,
        location=(0, 0, door_height/2)
    )
    left_frame = bpy.context.active_object
    left_frame.scale = (frame_width/2, door_depth/2, door_height/2)
    left_frame.name = "Frame_Left"
    frames.append(left_frame)

    # 우측 프레임
    bpy.ops.mesh.primitive_cube_add(
        size=1,
        location=(door_width, 0, door_height/2)
    )
    right_frame = bpy.context.active_object
    right_frame.scale = (frame_width/2, door_depth/2, door_height/2)
    right_frame.name = "Frame_Right"
    frames.append(right_frame)

    # 상단 프레임
    bpy.ops.mesh.primitive_cube_add(
        size=1,
        location=(door_width/2, 0, door_height)
    )
    top_frame = bpy.context.active_object
    top_frame.scale = (door_width/2 + frame_width/2, door_depth/2, frame_width/2)
    top_frame.name = "Frame_Top"
    frames.append(top_frame)

    # 하단 프레임
    bpy.ops.mesh.primitive_cube_add(
        size=1,
        location=(door_width/2, 0, 0)
    )
    bottom_frame = bpy.context.active_object
    bottom_frame.scale = (door_width/2 + frame_width/2, door_depth/2, frame_width/2)
    bottom_frame.name = "Frame_Bottom"
    frames.append(bottom_frame)

    return frames

def create_lattice_pattern():
    """전통 창살 격자 패턴 생성"""
    lattices = []

    # 내부 영역 크기
    inner_width = door_width - frame_width * 2
    inner_height = door_height - frame_width * 2
    start_x = frame_width
    start_z = frame_width

    # 중앙 큰 사각형 영역 (전체의 약 60% 높이, 80% 너비)
    center_width = inner_width * 0.7
    center_height = inner_height * 0.55
    center_start_x = start_x + (inner_width - center_width) / 2
    center_start_z = start_z + inner_height * 0.22

    # 중앙 사각형 테두리
    positions = [
        # 중앙 좌측 세로
        (center_start_x, center_start_z + center_height/2, lattice_width/2, center_height/2),
        # 중앙 우측 세로
        (center_start_x + center_width, center_start_z + center_height/2, lattice_width/2, center_height/2),
        # 중앙 상단 가로
        (center_start_x + center_width/2, center_start_z + center_height, center_width/2, lattice_width/2),
        # 중앙 하단 가로
        (center_start_x + center_width/2, center_start_z, center_width/2, lattice_width/2),
    ]

    # 상단 작은 격자들 (3x3 패턴)
    top_section_height = inner_height * 0.2
    top_start_z = start_z + center_start_z + center_height
    small_cell_width = inner_width / 3
    small_cell_height = top_section_height / 3

    # 상단 세로선
    for i in range(4):
        x = start_x + i * small_cell_width
        positions.append((x, top_start_z + top_section_height/2, lattice_width/2, top_section_height/2))

    # 상단 가로선
    for i in range(4):
        z = top_start_z + i * small_cell_height
        positions.append((start_x + inner_width/2, z, inner_width/2, lattice_width/2))

    # 하단 작은 격자들
    bottom_section_height = inner_height * 0.2
    bottom_start_z = start_z

    # 하단 세로선
    for i in range(4):
        x = start_x + i * small_cell_width
        positions.append((x, bottom_start_z + bottom_section_height/2, lattice_width/2, bottom_section_height/2))

    # 하단 가로선
    for i in range(4):
        z = bottom_start_z + i * small_cell_height
        positions.append((start_x + inner_width/2, z, inner_width/2, lattice_width/2))

    # 좌우 작은 격자들
    side_width = (inner_width - center_width) / 2

    # 좌측 세로선
    for i in range(2):
        x = start_x + i * side_width
        z_pos = center_start_z + center_height/2
        positions.append((x, z_pos, lattice_width/2, center_height/2))

    # 우측 세로선
    for i in range(2):
        x = center_start_x + center_width + i * side_width
        z_pos = center_start_z + center_height/2
        positions.append((x, z_pos, lattice_width/2, center_height/2))

    # 좌우 가로선 (중앙 높이에 여러 개)
    for i in range(5):
        z = center_start_z + i * (center_height / 4)
        # 좌측
        positions.append((start_x + side_width/2, z, side_width/2, lattice_width/2))
        # 우측
        positions.append((center_start_x + center_width + side_width/2, z, side_width/2, lattice_width/2))

    # 창살 생성
    for i, (x, z, scale_x, scale_z) in enumerate(positions):
        bpy.ops.mesh.primitive_cube_add(
            size=1,
            location=(x, lattice_depth/2, z)
        )
        lattice = bpy.context.active_object
        lattice.scale = (scale_x, lattice_depth/2, scale_z)
        lattice.name = f"Lattice_{i}"
        lattices.append(lattice)

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
    # 나무 재질
    wood_mat = bpy.data.materials.new(name="Wood_Material")
    wood_mat.use_nodes = True
    nodes = wood_mat.node_tree.nodes
    nodes.clear()

    output = nodes.new('ShaderNodeOutputMaterial')
    bsdf = nodes.new('ShaderNodeBsdfPrincipled')
    bsdf.inputs['Base Color'].default_value = (0.25, 0.15, 0.08, 1.0)  # 어두운 갈색
    bsdf.inputs['Roughness'].default_value = 0.6

    wood_mat.node_tree.links.new(bsdf.outputs['BSDF'], output.inputs['Surface'])

    # 종이 재질
    paper_mat = bpy.data.materials.new(name="Paper_Material")
    paper_mat.use_nodes = True
    nodes = paper_mat.node_tree.nodes
    nodes.clear()

    output = nodes.new('ShaderNodeOutputMaterial')
    bsdf = nodes.new('ShaderNodeBsdfPrincipled')
    bsdf.inputs['Base Color'].default_value = (0.95, 0.95, 0.9, 1.0)  # 약간 누런 흰색

    # Transmission Weight 사용 (Blender 4.x)
    if 'Transmission Weight' in bsdf.inputs:
        bsdf.inputs['Transmission Weight'].default_value = 0.7  # 반투명
    elif 'Transmission' in bsdf.inputs:
        bsdf.inputs['Transmission'].default_value = 0.7

    bsdf.inputs['Roughness'].default_value = 0.8
    bsdf.inputs['Alpha'].default_value = 0.8  # 추가 반투명 효과

    paper_mat.node_tree.links.new(bsdf.outputs['BSDF'], output.inputs['Surface'])

    # 블렌드 모드 설정
    paper_mat.blend_method = 'BLEND'

    return wood_mat, paper_mat

# 문 생성
print("Creating Korean traditional door...")

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

# 카메라 설정 - 문을 정면에서 보도록 조정
bpy.ops.object.camera_add(location=(door_width/2, -2.5, door_height/2))
camera = bpy.context.active_object
camera.rotation_euler = (math.pi/2, 0, 0)  # 정면을 바라보도록
bpy.context.scene.camera = camera  # 씬의 기본 카메라로 설정

# 조명 추가 - 더 밝게
bpy.ops.object.light_add(type='SUN', location=(2, -5, 10))
sun = bpy.context.active_object
sun.data.energy = 5  # 더 밝게

# 앞쪽 조명
bpy.ops.object.light_add(type='AREA', location=(door_width/2, -2, door_height/2))
front_light = bpy.context.active_object
front_light.data.energy = 300  # 더 밝게
front_light.data.size = 2  # 조명 크기

# 뒤쪽 조명 (실루엣 효과)
bpy.ops.object.light_add(type='AREA', location=(door_width/2, 1, door_height/2))
back_light = bpy.context.active_object
back_light.data.energy = 200
back_light.data.size = 2

# 월드 배경색 설정
world = bpy.data.worlds.get('World')
if world:
    world.use_nodes = True
    bg_node = world.node_tree.nodes.get('Background')
    if bg_node:
        bg_node.inputs['Color'].default_value = (0.8, 0.8, 0.8, 1.0)  # 밝은 회색
        bg_node.inputs['Strength'].default_value = 1.0

print("Korean traditional door created successfully!")
print("You can now view and render the door in Blender.")

# .blend 파일로 저장
output_path = "/Users/yjy/Desktop/cursor/blender/blender ppt/korean_door.blend"
bpy.ops.wm.save_as_mainfile(filepath=output_path)
print(f"File saved to: {output_path}")
