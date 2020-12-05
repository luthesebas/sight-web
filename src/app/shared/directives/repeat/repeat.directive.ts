import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

export class RepeatContext {
  constructor(readonly $implicit: number) {}
}

@Directive({
  selector: '[appRepeat][appRepeatOf]'
})
export class RepeatDirective {

  private readonly MAX_TIMES = 2 ** 16;

  constructor(
    private readonly template: TemplateRef<RepeatContext>,
    private readonly container: ViewContainerRef
  ) { }

  @Input()
  set appRepeatOf(times: number) {
    const safeTimes = Math.max(0, Math.min(times, this.MAX_TIMES));
    const alreadyRepeated = this.container.length;

    if (safeTimes < alreadyRepeated) {
      this.removeViews(alreadyRepeated - safeTimes);
    } else {
      this.addViews(alreadyRepeated, safeTimes);
    }
  }

  private addViews(currentLength: number, targetLength: number) {
    for (let i = currentLength; i < targetLength; i++) {
      this.container.createEmbeddedView<RepeatContext>(
        this.template,
        new RepeatContext(i)
      );
    }
  }

  private removeViews(amount: number) {
    for (let i = 0; i < amount; i++) {
      this.container.remove(); // Remove last view in container
    }
  }

}
