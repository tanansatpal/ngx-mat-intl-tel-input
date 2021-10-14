import { Injectable } from "@angular/core";
import { CountryCodesEN } from "../lang/country-codes_EN";
import { CountryCodesES } from "../lang/country-codes_ES";
import { Lang } from "../model/lang";

@Injectable({ providedIn: "root" })
export class CountryCodeService {
  langs: any[] = [CountryCodesEN, CountryCodesES];

  findByLang(lang?: string): any[] {
    if (!lang) {
      return new CountryCodesEN().countryCodes;
    }

    const loader = new InstanceLoader<Lang>(this);
    return loader.getInstance(lang).countryCodes;
  }
}

class InstanceLoader<T> {
  constructor(private context: CountryCodeService) {}

  getInstance(lang: string): T {
    const fonded =
      this.context.langs.find(
        (item) => item.prototype.constructor.name == `CountryCodes${lang}`
      ) ?? CountryCodesEN;
    let instance: Object = Object.create(fonded.prototype);
    instance.constructor.apply(instance, []);
    return <T>instance;
  }
}
