from pathlib import Path

# Base directory = folder where this script is located
BASE = Path(__file__).resolve().parent

# ----------------------------
# Directories
# ----------------------------

directories = [
    "client/public",
    "client/src",

    "client/app",

    "client/assets/models",
    "client/assets/textures",
    "client/assets/sounds",
    "client/assets/videos",
    "client/assets/icons",
    "client/assets/images",

    "client/components/Tree",
    "client/components/Camera",
    "client/components/Environment",
    "client/components/UI",
    "client/components/Common",

    "client/features/home/components",
    "client/features/about",
    "client/features/projects",
    "client/features/gallery",
    "client/features/blog",
    "client/features/contact",
    "client/features/auth",

    "client/redux/slices",
    "client/redux/middleware",
    "client/redux/selectors",

    "client/hooks",
    "client/services",
    "client/routes",
    "client/utils",
    "client/styles",

    "server/config",
    "server/controllers",
    "server/middleware",
    "server/models",
    "server/routes",
    "server/services",
    "server/utils",
    "server/uploads",
]

# ----------------------------
# Files
# ----------------------------

files = [

    # Root
    "package.json",
    "README.md",

    # Client root
    "client/App.jsx",
    "client/main.jsx",
    "client/index.css",

    # App
    "client/app/store.js",
    "client/app/rootReducer.js",
    "client/app/provider.jsx",

    # Models
    "client/assets/models/tree.glb",
    "client/assets/models/fruits.glb",
    "client/assets/models/birds.glb",

    # Tree
    "client/components/Tree/Tree.jsx",
    "client/components/Tree/Branch.jsx",
    "client/components/Tree/Leaf.jsx",
    "client/components/Tree/Fruit.jsx",
    "client/components/Tree/Roots.jsx",
    "client/components/Tree/Tree.css",

    # Camera
    "client/components/Camera/CameraRig.jsx",
    "client/components/Camera/ScrollController.jsx",
    "client/components/Camera/CameraAnimation.jsx",

    # Environment
    "client/components/Environment/Birds.jsx",
    "client/components/Environment/Clouds.jsx",
    "client/components/Environment/Fireflies.jsx",
    "client/components/Environment/SunRays.jsx",
    "client/components/Environment/Wind.jsx",

    # UI
    "client/components/UI/Loading.jsx",
    "client/components/UI/Navbar.jsx",
    "client/components/UI/Modal.jsx",
    "client/components/UI/Cursor.jsx",
    "client/components/UI/ProgressBar.jsx",

    # Common
    "client/components/Common/Button.jsx",
    "client/components/Common/Card.jsx",
    "client/components/Common/Spinner.jsx",

    # Home
    "client/features/home/Home.jsx",
    "client/features/home/homeSlice.js",
    "client/features/home/homeAPI.js",

    # Auth
    "client/features/auth/Login.jsx",
    "client/features/auth/Register.jsx",
    "client/features/auth/authSlice.js",
    "client/features/auth/authAPI.js",
    "client/features/auth/authService.js",

    # Redux
    "client/redux/slices/treeSlice.js",
    "client/redux/slices/cameraSlice.js",
    "client/redux/slices/scrollSlice.js",
    "client/redux/slices/uiSlice.js",
    "client/redux/slices/animationSlice.js",
    "client/redux/slices/userSlice.js",

    # Hooks
    "client/hooks/useAppDispatch.js",
    "client/hooks/useAppSelector.js",
    "client/hooks/useCamera.js",
    "client/hooks/useTree.js",
    "client/hooks/useScroll.js",

    # Services
    "client/services/axios.js",
    "client/services/api.js",
    "client/services/socket.js",

    # Routes
    "client/routes/AppRoutes.jsx",
    "client/routes/PrivateRoute.jsx",
    "client/routes/PublicRoute.jsx",

    # Utils
    "client/utils/constants.js",
    "client/utils/helpers.js",
    "client/utils/math.js",
    "client/utils/animations.js",

    # Styles
    "client/styles/globals.css",
    "client/styles/variables.css",
    "client/styles/fonts.css",
    "client/styles/animations.css",

    # Server
    "server/app.js",
    "server/server.js",
]

# ----------------------------
# Create directories
# ----------------------------

print("Creating directories...")

for directory in directories:
    path = BASE / directory
    path.mkdir(parents=True, exist_ok=True)

print("Directories created.")

# ----------------------------
# Create files
# ----------------------------

print("Creating files...")

print(f"Total directories: {len(directories)}")
print(f"Total files: {len(files)}")

for file in files:
    path = BASE / file

    print("Creating:", path)
    path.parent.mkdir(parents=True, exist_ok=True)

    path.touch(exist_ok=True)

    print("✓", path.relative_to(BASE))

print("\nProject structure created successfully.")