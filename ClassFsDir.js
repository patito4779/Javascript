

const fs = require("fs");

async function print(path) {
    const dir = await fs.promises.opendir(path);
    for await (const dirpath of dir) {
        console.log(dirpath.name)
    }
}

print("/").catch(console.error)