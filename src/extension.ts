// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as cp from 'child_process';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json

	context.subscriptions.push(
		vscode.commands.registerCommand('helloworld.testNpmInstallCommand', () => {
			const workSpaceFolders = vscode.workspace.workspaceFolders;
			if (workSpaceFolders && workSpaceFolders.length > 0) {
				const currentWorkSpaceFolder = workSpaceFolders[0].uri.fsPath;

				try {
					let result = cp.execSync(
						"npm i cordova-simulate --no-save",
						{ cwd: currentWorkSpaceFolder }
					);
	
					const resStr = result.toString();
	
					console.log("helloworld.testNpmInstallCommand result:");
					console.log(result);
					console.log(resStr);
				} catch (err) {
					console.log(err);
					throw err;
				}
			}
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('helloworld.testNpmRunCommand', () => {
			const workSpaceFolders = vscode.workspace.workspaceFolders;
			if (workSpaceFolders && workSpaceFolders.length > 0) {
				const currentWorkSpaceFolder = workSpaceFolders[0].uri.fsPath;

				try {
					let result = cp.execSync(
						"npm run myRun",
						{ cwd: currentWorkSpaceFolder }
					);
	
					const resStr = result.toString();
	
					console.log("helloworld.testNpmRunCommand result:");
					console.log(result);
					console.log(resStr);
				} catch (err) {
					console.log(err);
					throw err;
				}
			}
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('helloworld.testCliCommand', () => {
			const workSpaceFolders = vscode.workspace.workspaceFolders;
			if (workSpaceFolders && workSpaceFolders.length > 0) {
				const currentWorkSpaceFolder = workSpaceFolders[0].uri.fsPath;

				try {
					let result = cp.execSync(
						`${currentWorkSpaceFolder}/node_modules/.bin/react-native init TestProject`,
						{ cwd: currentWorkSpaceFolder }
					);
	
					const resStr = result.toString();
	
					console.log("helloworld.testCliCommand result:");
					console.log(result);
					console.log(
						resStr || `Command "testCliCommand" worked incorrectly: CLI execution skipped, empty result`
					);
				} catch (err) {
					console.log(err);
					throw err;
				}
			}
		})
	);
}

// this method is called when your extension is deactivated
export function deactivate() {}
