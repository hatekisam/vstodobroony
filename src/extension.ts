import * as vscode from 'vscode';
import { HelloWorldPanel } from './HelloWorldPanel';


export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "vstodobroony" is now active!');


	context.subscriptions.push(
		vscode.commands.registerCommand('vstodobroony.helloWorld', () => {
			HelloWorldPanel.createOrShow(context.extensionUri);
		})
	);


	context.subscriptions.push(
		vscode.commands.registerCommand("vstodobroony.askQuestion", async () => {
			const answer = await vscode.window.showInformationMessage("How was your day ? ", "good", "bad");
			if (answer === "bad") {
				vscode.window.showErrorMessage("Sorry to  hear that");
			} else {
				vscode.window.showInformationMessage("Good then may it be good that you date Audrey more better");
			}
		})
	);
}
export function deactivate() { }
