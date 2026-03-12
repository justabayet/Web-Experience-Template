# Web-Experience-Template

.zshrc or .bashrc file
```bash
new-xp() {
    if [ -z "$1" ]; then
        echo "❌ Error: Please provide a project name. Usage: new-xp my-project-name"
        return 1
    fi
    # 1. Setup variables
    PROJECT_NAME=$1
    TEMPLATE_REPO="justabayet/Web-Experience-Template"

    # 2. Degit and Rename
    npx degit $TEMPLATE_REPO "$PROJECT_NAME" && \
    cd "$PROJECT_NAME" && \
    node -e "let j = require('./package.json'); j.name = '$PROJECT_NAME'; require('fs').writeFileSync('./package.json', JSON.stringify(j, null, 2))" && \

    # 3. Git Initialization
    git init && \
    git add . && \
    git commit -m "Initial commit from template" && \

    # 4. Create GitHub Repo via CLI
    # Use --public if you want it public by default
    gh repo create "$PROJECT_NAME" --private --source=. --remote=origin --push && \

    # 5. Connect to Vercel (Optional: opens the browser to link)
    echo "✅ Repo created at https://github.com/justabayet/$PROJECT_NAME" && \
    echo "🚀 Npm i..." && \
    npm i && \

    code .
}
```

```bash
new-web-xp my-cool-game
```