import { Plugin, MarkdownPostProcessorContext, MarkdownView } from "obsidian";

export default class CornellNotePlugin extends Plugin {
	async onload() {
		this.registerMarkdownPostProcessor((element, context) => {
			const containerEl = this.getContainerElement(element, context);
			if (!containerEl) {
				return;
			}
			this.setAndRemoveClass(containerEl);
		});

		this.addCommand({
			id: "redraw",
			name: "Redraw Cornell note",
			callback: () => {
				const view = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (!view) {
					return;
				}
				const previewSection = view.contentEl.querySelector<HTMLElement>(
					".markdown-preview-section",
				);
				if (!previewSection) {
					return;
				}
				this.setAndRemoveClass(previewSection);
			},
		});
	}

	private getContainerElement(
		element: HTMLElement,
		context: MarkdownPostProcessorContext,
	): HTMLElement | null {
		if ((context as any).containerEl) {
			return (context as any).containerEl as HTMLElement;
		}

		return element.closest(".markdown-preview-section");
	}

	private setAndRemoveClass(containerEl: HTMLElement) {
		const setAndRemove = (elements: HTMLElement[]) => {
			for (let i = 0; i < elements.length; i++) {
				const element = elements[i];
				if (i === 0) {
					element.classList.add("first");
				} else {
					element.classList.remove("first");
				}

				if (i === 1) {
					element.classList.add("second");
				} else {
					element.classList.remove("second");
				}

				if (i === elements.length - 1) {
					element.classList.add("last");
				} else {
					element.classList.remove("last");
				}
			}
		};
		const elH2s = Array.from(
			containerEl.querySelectorAll<HTMLElement>(".el-h2"),
		);
		setAndRemove(elH2s);
		const elPs = Array.from(containerEl.querySelectorAll<HTMLElement>(".el-p"));
		setAndRemove(elPs);
	}
}
