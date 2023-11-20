try {
    // imports
    const fs = require('fs');
    const shelljs = require('shelljs');

    const templates = JSON.parse(fs.readFileSync('templates.json', 'utf8'));
    
    const archetypeToGenerate = process.argv[2]; // Archetype name
    const projectName = process.argv[3]; // Project name
    const folderDirectory = process.argv[4]; // Location to clone the code - Optional parameter
    const archetypeUri = templates[archetypeToGenerate];

    if(!archetypeUri || !projectName) {
        throw  new Error("Archetype doesn't exist or project name is not defined!");
    }

    if(folderDirectory) {
        if (!fs.existsSync(folderDirectory)) {
            shelljs.mkdir(folderDirectory);
        }
        shelljs.cd(folderDirectory);
    }

    shelljs.exec(`git clone ${archetypeUri} ${projectName}`);
    shelljs.cd(projectName);
    shelljs.sed('-i', `${archetypeToGenerate}-archetype`, projectName, './package.json');
    shelljs.rm('-rf', '.git/');

    console.log(`${projectName} project generated successfully`);

} catch(err) {
    console.log('Error generating project: ', err);
}