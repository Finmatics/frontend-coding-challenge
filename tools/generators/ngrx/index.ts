import type { GeneratorCallback, Tree } from '@nrwl/devkit';
import { formatFiles } from '@nrwl/devkit';
import { addExportsToBarrel, addImportsToModule, generateNgrxFilesFromTemplates } from './lib';
import type { NgRxGeneratorOptions } from './schema';

export async function ngrxGenerator(
  tree: Tree,
  options: NgRxGeneratorOptions
): Promise<GeneratorCallback> {
  const filename = options.module.replace(new RegExp('/', 'g'), '-').replace(/-\d+/g, '');
  const normalizedOptions: NgRxGeneratorOptions = {
    directory: '+state',
    minimal: false,
    module: '/libs/' + options.module + '/src/lib/' + filename + '.module.ts',
    name: options.name,
    useDataPersistence: false,
    barrels: true,
    facade: true
  };

  if (!tree.exists(normalizedOptions.module)) {
    throw new Error(`Module does not exist: ${normalizedOptions.module}.`);
  }

  if (!normalizedOptions.minimal || !normalizedOptions.root) {
    generateNgrxFilesFromTemplates(tree, normalizedOptions);
  }

  if (!normalizedOptions.skipImport) {
    addImportsToModule(tree, normalizedOptions);
    addExportsToBarrel(tree, normalizedOptions);
  }

  if (!normalizedOptions.skipFormat) {
    await formatFiles(tree);
  }

  return () => {};
}

export default ngrxGenerator;
