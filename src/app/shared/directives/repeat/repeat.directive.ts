import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective {

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) { }

  @Input()
  set appRepeat(times: number) {
    this.container.clear();

    for (let i = 0; i < times; i++) {
      this.container.createEmbeddedView(
        this.template,
        {
          $implicit: times,
          index: i // Make index in template available, by adding it to the context
        }
      );
    }
  }

}
