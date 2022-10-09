import { isLetter, LayoutExport, LayoutFile } from '.';
import { LayoutModel, shiftKeys } from '../../models/layout'

const macHex = new Map([
  ['<', '&#x003C;'],
  ['>', '&#x003E;']
])

const mac: LayoutExport = (layout) => {

  // key
  const k = (i: number): string => {
    return layout.keys[i];
  }

  // uppercase key
  const upk = (i: number): string => {
    const key = layout.keys[i];
    const shift = shiftKeys.get(key)
    if (shift) {
      return macHex.get(shift) ?? shift
    }
    return key.toUpperCase()
  }

  const caps = (i: number): string => {
    const key = layout.keys[i];
    return shiftKeys.has(key) ? key : key.toUpperCase()
  }

  const content = `<?xml version="1.1" encoding="UTF-8"?>
<!DOCTYPE keyboard SYSTEM "file://localhost/System/Library/DTDs/KeyboardLayout.dtd">
<keyboard group="126" id="-10663" name="${layout.name}" maxout="1">
  <layouts>
    <layout first="0" last="17" mapSet="ANSI" modifiers="Modifiers"/>
    <layout first="18" last="18" mapSet="JIS" modifiers="Modifiers"/>
    <layout first="21" last="23" mapSet="JIS" modifiers="Modifiers"/>
    <layout first="30" last="30" mapSet="JIS" modifiers="Modifiers"/>
    <layout first="33" last="33" mapSet="JIS" modifiers="Modifiers"/>
    <layout first="36" last="36" mapSet="JIS" modifiers="Modifiers"/>
    <layout first="194" last="194" mapSet="JIS" modifiers="Modifiers"/>
    <layout first="197" last="197" mapSet="JIS" modifiers="Modifiers"/>
    <layout first="200" last="201" mapSet="JIS" modifiers="Modifiers"/>
    <layout first="206" last="207" mapSet="JIS" modifiers="Modifiers"/>
  </layouts>
  <modifierMap id="Modifiers" defaultIndex="6">
    <keyMapSelect mapIndex="0">
      <modifier keys=""/>
    </keyMapSelect>
    <keyMapSelect mapIndex="1">
      <modifier keys="anyShift"/>
    </keyMapSelect>
    <keyMapSelect mapIndex="2">
      <modifier keys="anyOption"/>
    </keyMapSelect>
    <keyMapSelect mapIndex="3">
      <modifier keys="anyShift caps? anyOption"/>
    </keyMapSelect>
    <keyMapSelect mapIndex="4">
      <modifier keys="command"/>
    </keyMapSelect>
    <keyMapSelect mapIndex="5">
      <modifier keys="caps"/>
    </keyMapSelect>
    <keyMapSelect mapIndex="6">
      <modifier keys="anyControl"/>
    </keyMapSelect>
  </modifierMap>
  <keyMapSet id="ANSI">
    <keyMap index="0">
      <key code="0" output="${k(13)}"/>
      <key code="1" output="${k(14)}"/>
      <key code="2" output="${k(15)}"/>
      <key code="3" output="${k(16)}"/>
      <key code="4" output="${k(18)}"/>
      <key code="5" output="${k(17)}"/>
      <key code="6" output="${k(24)}"/>
      <key code="7" output="${k(25)}"/>
      <key code="8" output="${k(26)}"/>
      <key code="9" output="${k(27)}"/>
      <key code="11" output="${k(28)}"/>
      <key code="12" output="${k(0)}"/>
      <key code="13" output="${k(1)}"/>
      <key code="14" output="${k(2)}"/>
      <key code="15" output="${k(3)}"/>
      <key code="16" output="${k(5)}"/>
      <key code="17" output="${k(4)}"/>
      <key code="18" output="1"/>
      <key code="19" output="2"/>
      <key code="20" output="3"/>
      <key code="21" output="4"/>
      <key code="22" output="6"/>
      <key code="23" output="5"/>
      <key code="24" output="="/>
      <key code="25" output="9"/>
      <key code="26" output="7"/>
      <key code="27" output="-"/>
      <key code="28" output="8"/>
      <key code="29" output="0"/>
      <key code="30" output="${k(11)}"/>
      <key code="31" output="${k(8)}"/>
      <key code="32" output="${k(6)}"/>
      <key code="33" output="${k(10)}"/>
      <key code="34" output="${k(7)}"/>
      <key code="35" output="${k(9)}"/>
      <key code="36" output="&#x000D;"/>
      <key code="37" output="${k(21)}"/>
      <key code="38" output="${k(19)}"/>
      <key code="39" output="&#x0027;"/>
      <key code="40" output="${k(20)}"/>
      <key code="41" output="${k(22)}"/>
      <key code="42" output="${k(12)}"/>
      <key code="43" output="${k(31)}"/>
      <key code="44" output="${k(33)}"/>
      <key code="45" output="${k(29)}"/>
      <key code="46" output="${k(30)}"/>
      <key code="47" output="${k(32)}"/>
      <key code="48" output="&#x0009;"/>
      <key code="49" output=" "/>
      <key code="50" output="\`"/>
      <key code="51" output="&#x0008;"/>
      <key code="53" output="&#x001B;"/>
      <key code="64" output="&#x0010;"/>
      <key code="65" output="."/>
      <key code="66" output="&#x001D;"/>
      <key code="67" output="*"/>
      <key code="69" output="+"/>
      <key code="70" output="&#x001C;"/>
      <key code="71" output="&#x001B;"/>
      <key code="72" output="&#x001F;"/>
      <key code="75" output="/"/>
      <key code="76" output="&#x0003;"/>
      <key code="77" output="&#x001E;"/>
      <key code="78" output="-"/>
      <key code="79" output="&#x0010;"/>
      <key code="80" output="&#x0010;"/>
      <key code="81" output="="/>
      <key code="82" output="0"/>
      <key code="83" output="1"/>
      <key code="84" output="2"/>
      <key code="85" output="3"/>
      <key code="86" output="4"/>
      <key code="87" output="5"/>
      <key code="88" output="6"/>
      <key code="89" output="7"/>
      <key code="91" output="8"/>
      <key code="92" output="9"/>
      <key code="96" output="&#x0010;"/>
      <key code="97" output="&#x0010;"/>
      <key code="98" output="&#x0010;"/>
      <key code="99" output="&#x0010;"/>
      <key code="100" output="&#x0010;"/>
      <key code="101" output="&#x0010;"/>
      <key code="103" output="&#x0010;"/>
      <key code="105" output="&#x0010;"/>
      <key code="106" output="&#x0010;"/>
      <key code="107" output="&#x0010;"/>
      <key code="109" output="&#x0010;"/>
      <key code="111" output="&#x0010;"/>
      <key code="113" output="&#x0010;"/>
      <key code="114" output="&#x0005;"/>
      <key code="115" output="&#x0001;"/>
      <key code="116" output="&#x000B;"/>
      <key code="117" output="&#x007F;"/>
      <key code="118" output="&#x0010;"/>
      <key code="119" output="&#x0004;"/>
      <key code="120" output="&#x0010;"/>
      <key code="121" output="&#x000C;"/>
      <key code="122" output="&#x0010;"/>
      <key code="123" output="&#x001C;"/>
      <key code="124" output="&#x001D;"/>
      <key code="125" output="&#x001F;"/>
      <key code="126" output="&#x001E;"/>
    </keyMap>
    <keyMap index="1">
      <key code="0" output="${upk(13)}"/>
      <key code="1" output="${upk(14)}"/>
      <key code="2" output="${upk(15)}"/>
      <key code="3" output="${upk(16)}"/>
      <key code="4" output="${upk(18)}"/>
      <key code="5" output="${upk(17)}"/>
      <key code="6" output="${upk(24)}"/>
      <key code="7" output="${upk(25)}"/>
      <key code="8" output="${upk(26)}"/>
      <key code="9" output="${upk(27)}"/>
      <key code="11" output="${upk(28)}"/>
      <key code="12" output="${upk(0)}"/>
      <key code="13" output="${upk(1)}"/>
      <key code="14" output="${upk(2)}"/>
      <key code="15" output="${upk(3)}"/>
      <key code="16" output="${upk(5)}"/>
      <key code="17" output="${upk(4)}"/>
      <key code="18" output="!"/>
      <key code="19" output="@"/>
      <key code="20" output="#"/>
      <key code="21" output="$"/>
      <key code="22" output="^"/>
      <key code="23" output="%"/>
      <key code="24" output="+"/>
      <key code="25" output="("/>
      <key code="26" output="&#x0026;"/>
      <key code="27" output="_"/>
      <key code="28" output="*"/>
      <key code="29" output=")"/>
      <key code="30" output="${upk(11)}"/>
      <key code="31" output="${upk(8)}"/>
      <key code="32" output="${upk(6)}"/>
      <key code="33" output="${upk(10)}"/>
      <key code="34" output="${upk(7)}"/>
      <key code="35" output="${upk(9)}"/>
      <key code="36" output="&#x000D;"/>
      <key code="37" output="${upk(21)}"/>
      <key code="38" output="${upk(19)}"/>
      <key code="39" output="&#x0022;"/>
      <key code="40" output="${upk(20)}"/>
      <key code="41" output="${upk(22)}"/>
      <key code="42" output="${upk(12)}"/>
      <key code="43" output="${upk(31)}"/>
      <key code="44" output="${upk(33)}"/>
      <key code="45" output="${upk(29)}"/>
      <key code="46" output="${upk(30)}"/>
      <key code="47" output="${upk(32)}"/>
      <key code="48" output="&#x0009;"/>
      <key code="49" output=" "/>
      <key code="50" output="~"/>
      <key code="51" output="&#x0008;"/>
      <key code="53" output="&#x001B;"/>
      <key code="64" output="&#x0010;"/>
      <key code="65" output=""/>
      <key code="66" output="&#x001D;"/>
      <key code="67" output="*"/>
      <key code="70" output="&#x001C;"/>
      <key code="69" output="+"/>
      <key code="72" output="&#x001F;"/>
      <key code="71" output="&#x001B;"/>
      <key code="76" output="&#x0003;"/>
      <key code="75" output="/"/>
      <key code="78" output="-"/>
      <key code="77" output="&#x001E;"/>
      <key code="80" output="&#x0010;"/>
      <key code="79" output="&#x0010;"/>
      <key code="82" output="0"/>
      <key code="81" output="="/>
      <key code="84" output="2"/>
      <key code="83" output="1"/>
      <key code="86" output="4"/>
      <key code="85" output="3"/>
      <key code="88" output="6"/>
      <key code="87" output="5"/>
      <key code="91" output="8"/>
      <key code="89" output="7"/>
      <key code="96" output="&#x0010;"/>
      <key code="92" output="9"/>
      <key code="98" output="&#x0010;"/>
      <key code="97" output="&#x0010;"/>
      <key code="100" output="&#x0010;"/>
      <key code="99" output="&#x0010;"/>
      <key code="103" output="&#x0010;"/>
      <key code="101" output="&#x0010;"/>
      <key code="106" output="&#x0010;"/>
      <key code="105" output="&#x0010;"/>
      <key code="109" output="&#x0010;"/>
      <key code="107" output="&#x0010;"/>
      <key code="113" output="&#x0010;"/>
      <key code="111" output="&#x0010;"/>
      <key code="115" output="&#x0001;"/>
      <key code="114" output="&#x0005;"/>
      <key code="117" output="&#x007F;"/>
      <key code="116" output="&#x000B;"/>
      <key code="119" output="&#x0004;"/>
      <key code="118" output="&#x0010;"/>
      <key code="120" output="&#x0010;"/>
      <key code="121" output="&#x000C;"/>
      <key code="122" output="&#x0010;"/>
      <key code="123" output="&#x001C;"/>
      <key code="124" output="&#x001D;"/>
      <key code="125" output="&#x001F;"/>
      <key code="126" output="&#x001E;"/>
    </keyMap>
    <keyMap index="2">
      <key code="1" output=""/>
      <key code="3" output="ä"/>
      <key code="0" output=""/>
      <key code="5" output=""/>
      <key code="2" output=""/>
      <key code="7" output=""/>
      <key code="4" output=""/>
      <key code="9" output=""/>
      <key code="6" output=""/>
      <key code="12" output=""/>
      <key code="8" output=""/>
      <key code="14" output="ö"/>
      <key code="11" output=""/>
      <key code="16" output=""/>
      <key code="13" output=""/>
      <key code="18" output="ä"/>
      <key code="15" output="ü"/>
      <key code="20" output="ü"/>
      <key code="17" output=""/>
      <key code="22" output=""/>
      <key code="19" output="ö"/>
      <key code="24" output=""/>
      <key code="21" output="ß"/>
      <key code="26" output=""/>
      <key code="23" output=""/>
      <key code="28" output=""/>
      <key code="25" output=""/>
      <key code="30" output=""/>
      <key code="27" output=""/>
      <key code="32" output=""/>
      <key code="29" output=""/>
      <key code="34" output=""/>
      <key code="31" output=""/>
      <key code="36" output="&#x000D;"/>
      <key code="33" output=""/>
      <key code="38" output=""/>
      <key code="35" output=""/>
      <key code="40" output=""/>
      <key code="37" output="ß"/>
      <key code="42" output=""/>
      <key code="39" output=""/>
      <key code="44" output=""/>
      <key code="41" output=""/>
      <key code="46" output=""/>
      <key code="43" output=""/>
      <key code="48" output="&#x0009;"/>
      <key code="45" output=""/>
      <key code="50" output=""/>
      <key code="47" output=""/>
      <key code="53" output="&#x001B;"/>
      <key code="49" output=""/>
      <key code="65" output="."/>
      <key code="51" output="&#x0008;"/>
      <key code="67" output="*"/>
      <key code="64" output="&#x0010;"/>
      <key code="70" output="&#x001C;"/>
      <key code="66" output="&#x001D;"/>
      <key code="72" output="&#x001F;"/>
      <key code="69" output="+"/>
      <key code="76" output="&#x0003;"/>
      <key code="71" output="&#x001B;"/>
      <key code="78" output="-"/>
      <key code="75" output="/"/>
      <key code="80" output="&#x0010;"/>
      <key code="77" output="&#x001E;"/>
      <key code="82" output="0"/>
      <key code="79" output="&#x0010;"/>
      <key code="84" output="2"/>
      <key code="81" output="="/>
      <key code="86" output="4"/>
      <key code="83" output="1"/>
      <key code="88" output="6"/>
      <key code="85" output="3"/>
      <key code="91" output="8"/>
      <key code="87" output="5"/>
      <key code="96" output="&#x0010;"/>
      <key code="89" output="7"/>
      <key code="98" output="&#x0010;"/>
      <key code="92" output="9"/>
      <key code="100" output="&#x0010;"/>
      <key code="97" output="&#x0010;"/>
      <key code="103" output="&#x0010;"/>
      <key code="99" output="&#x0010;"/>
      <key code="106" output="&#x0010;"/>
      <key code="101" output="&#x0010;"/>
      <key code="109" output="&#x0010;"/>
      <key code="105" output="&#x0010;"/>
      <key code="113" output="&#x0010;"/>
      <key code="107" output="&#x0010;"/>
      <key code="115" output="&#x0001;"/>
      <key code="111" output="&#x0010;"/>
      <key code="117" output="&#x007F;"/>
      <key code="114" output="&#x0005;"/>
      <key code="116" output="&#x000B;"/>
      <key code="118" output="&#x0010;"/>
      <key code="119" output="&#x0004;"/>
      <key code="120" output="&#x0010;"/>
      <key code="121" output="&#x000C;"/>
      <key code="122" output="&#x0010;"/>
      <key code="123" output="&#x001C;"/>
      <key code="124" output="&#x001D;"/>
      <key code="125" output="&#x001F;"/>
      <key code="126" output="&#x001E;"/>
    </keyMap>
    <keyMap index="3">
      <key code="0" output=""/>
      <key code="2" output=""/>
      <key code="4" output=""/>
      <key code="1" output=""/>
      <key code="6" output=""/>
      <key code="3" output="Ä"/>
      <key code="8" output=""/>
      <key code="5" output=""/>
      <key code="11" output=""/>
      <key code="7" output=""/>
      <key code="13" output=""/>
      <key code="9" output=""/>
      <key code="15" output="Ü"/>
      <key code="12" output=""/>
      <key code="17" output=""/>
      <key code="14" output="Ö"/>
      <key code="19" output="Ö"/>
      <key code="16" output=""/>
      <key code="21" output=""/>
      <key code="18" output="Ä"/>
      <key code="23" output=""/>
      <key code="20" output="Ü"/>
      <key code="25" output=""/>
      <key code="22" output=""/>
      <key code="27" output=""/>
      <key code="24" output=""/>
      <key code="29" output=""/>
      <key code="26" output=""/>
      <key code="31" output=""/>
      <key code="28" output=""/>
      <key code="33" output=""/>
      <key code="30" output=""/>
      <key code="35" output=""/>
      <key code="32" output=""/>
      <key code="37" output=""/>
      <key code="34" output=""/>
      <key code="39" output=""/>
      <key code="36" output="&#x000D;"/>
      <key code="41" output=""/>
      <key code="38" output=""/>
      <key code="43" output=""/>
      <key code="40" output=""/>
      <key code="45" output=""/>
      <key code="42" output=""/>
      <key code="47" output=""/>
      <key code="44" output=""/>
      <key code="49" output=""/>
      <key code="46" output=""/>
      <key code="51" output="&#x0008;"/>
      <key code="48" output="&#x0009;"/>
      <key code="64" output="&#x0010;"/>
      <key code="50" output=""/>
      <key code="66" output="&#x001D;"/>
      <key code="53" output="&#x001B;"/>
      <key code="69" output=""/>
      <key code="65" output=""/>
      <key code="71" output="&#x001B;"/>
      <key code="67" output=""/>
      <key code="75" output=""/>
      <key code="70" output="&#x001C;"/>
      <key code="77" output="&#x001E;"/>
      <key code="72" output="&#x001F;"/>
      <key code="79" output="&#x0010;"/>
      <key code="76" output="&#x0003;"/>
      <key code="81" output=""/>
      <key code="78" output=""/>
      <key code="83" output=""/>
      <key code="80" output="&#x0010;"/>
      <key code="82" output=""/>
      <key code="84" output=""/>
      <key code="85" output=""/>
      <key code="86" output=""/>
      <key code="87" output=""/>
      <key code="88" output=""/>
      <key code="89" output=""/>
      <key code="91" output=""/>
      <key code="92" output=""/>
      <key code="96" output="&#x0010;"/>
      <key code="97" output="&#x0010;"/>
      <key code="98" output="&#x0010;"/>
      <key code="99" output="&#x0010;"/>
      <key code="100" output="&#x0010;"/>
      <key code="101" output="&#x0010;"/>
      <key code="103" output="&#x0010;"/>
      <key code="105" output="&#x0010;"/>
      <key code="106" output="&#x0010;"/>
      <key code="107" output="&#x0010;"/>
      <key code="109" output="&#x0010;"/>
      <key code="111" output="&#x0010;"/>
      <key code="113" output="&#x0010;"/>
      <key code="114" output="&#x0005;"/>
      <key code="115" output="&#x0001;"/>
      <key code="116" output="&#x000B;"/>
      <key code="117" output="&#x007F;"/>
      <key code="118" output="&#x0010;"/>
      <key code="119" output="&#x0004;"/>
      <key code="120" output="&#x0010;"/>
      <key code="121" output="&#x000C;"/>
      <key code="122" output="&#x0010;"/>
      <key code="123" output="&#x001C;"/>
      <key code="124" output="&#x001D;"/>
      <key code="125" output="&#x001F;"/>
      <key code="126" output="&#x001E;"/>
    </keyMap>
    <keyMap index="4">
      <key code="0" output="${k(13)}"/>
      <key code="1" output="${k(14)}"/>
      <key code="2" output="${k(15)}"/>
      <key code="3" output="${k(16)}"/>
      <key code="4" output="${k(18)}"/>
      <key code="5" output="${k(17)}"/>
      <key code="6" output="${k(24)}"/>
      <key code="7" output="${k(25)}"/>
      <key code="8" output="${k(26)}"/>
      <key code="9" output="${k(27)}"/>
      <key code="11" output="${k(28)}"/>
      <key code="12" output="${k(0)}"/>
      <key code="13" output="${k(1)}"/>
      <key code="14" output="${k(2)}"/>
      <key code="15" output="${k(3)}"/>
      <key code="16" output="${k(5)}"/>
      <key code="17" output="${k(4)}"/>
      <key code="18" output="1"/>
      <key code="19" output="2"/>
      <key code="20" output="3"/>
      <key code="21" output="4"/>
      <key code="22" output="6"/>
      <key code="23" output="5"/>
      <key code="24" output="="/>
      <key code="25" output="9"/>
      <key code="26" output="7"/>
      <key code="27" output="-"/>
      <key code="28" output="8"/>
      <key code="29" output="0"/>
      <key code="30" output="${k(11)}"/>
      <key code="31" output="${k(8)}"/>
      <key code="32" output="${k(6)}"/>
      <key code="33" output="${k(10)}"/>
      <key code="34" output="${k(7)}"/>
      <key code="35" output="${k(9)}"/>
      <key code="36" output="&#x000D;"/>
      <key code="37" output="${k(21)}"/>
      <key code="38" output="${k(19)}"/>
      <key code="39" output="&#x0027;"/>
      <key code="40" output="${k(20)}"/>
      <key code="41" output="${k(22)}"/>
      <key code="42" output="${k(12)}"/>
      <key code="43" output="${k(31)}"/>
      <key code="44" output="${k(33)}"/>
      <key code="45" output="${k(29)}"/>
      <key code="46" output="${k(30)}"/>
      <key code="47" output="${k(32)}"/>
      <key code="48" output="&#x0009;"/>
      <key code="49" output=" "/>
      <key code="50" output="\`"/>
      < key code = "51" output = "&#x0008;" />
      <key code="53" output = "&#x001B;" />
      <key code="64" output = "&#x0010;" />
      <key code="65" output = "." />
      <key code="66" output = "&#x001D;" />
      <key code="67" output = "*" />
      <key code="69" output = "+" />
      <key code="70" output = "&#x001C;" />
      <key code="71" output = "&#x001B;" />
      <key code="72" output = "&#x001F;" />
      <key code="75" output = "/" />
      <key code="76" output = "&#x0003;" />
      <key code="77" output = "&#x001E;" />
      <key code="78" output = "-" />
      <key code="79" output = "&#x0010;" />
      <key code="80" output = "&#x0010;" />
      <key code="81" output = "=" />
      <key code="82" output = "0" />
      <key code="83" output = "1" />
      <key code="84" output = "2" />
      <key code="85" output = "3" />
      <key code="86" output = "4" />
      <key code="87" output = "5" />
      <key code="88" output = "6" />
      <key code="89" output = "7" />
      <key code="91" output = "8" />
      <key code="92" output = "9" />
      <key code="96" output = "&#x0010;" />
      <key code="97" output = "&#x0010;" />
      <key code="98" output = "&#x0010;" />
      <key code="99" output = "&#x0010;" />
      <key code="100" output = "&#x0010;" />
      <key code="101" output = "&#x0010;" />
      <key code="103" output = "&#x0010;" />
      <key code="105" output = "&#x0010;" />
      <key code="106" output = "&#x0010;" />
      <key code="107" output = "&#x0010;" />
      <key code="109" output = "&#x0010;" />
      <key code="111" output = "&#x0010;" />
      <key code="113" output = "&#x0010;" />
      <key code="114" output = "&#x0005;" />
      <key code="115" output = "&#x0001;" />
      <key code="116" output = "&#x000B;" />
      <key code="117" output = "&#x007F;" />
      <key code="118" output = "&#x0010;" />
      <key code="119" output = "&#x0004;" />
      <key code="120" output = "&#x0010;" />
      <key code="121" output = "&#x000C;" />
      <key code="122" output = "&#x0010;" />
      <key code="123" output = "&#x001C;" />
      <key code="124" output = "&#x001D;" />
      <key code="125" output = "&#x001F;" />
      <key code="126" output = "&#x001E;" />
    </keyMap>
    <keyMap index="5" >
      <key code="0" output="${caps(13)}"/>
      <key code="1" output="${caps(14)}"/>
      <key code="2" output="${caps(15)}"/>
      <key code="3" output="${caps(16)}"/>
      <key code="4" output="${caps(18)}"/>
      <key code="5" output="${caps(17)}"/>
      <key code="6" output="${caps(24)}"/>
      <key code="7" output="${caps(25)}"/>
      <key code="8" output="${caps(26)}"/>
      <key code="9" output="${caps(27)}"/>
      <key code="11" output="${caps(28)}"/>
      <key code="12" output="${caps(0)}"/>
      <key code="13" output="${caps(1)}"/>
      <key code="14" output="${caps(2)}"/>
      <key code="15" output="${caps(3)}"/>
      <key code="16" output="${caps(5)}"/>
      <key code="17" output="${caps(4)}"/>
      <key code="18" output = "1" />
      <key code="19" output = "2" />
      <key code="20" output = "3" />
      <key code="21" output = "4" />
      <key code="22" output = "6" />
      <key code="23" output = "5" />
      <key code="24" output = "=" />
      <key code="25" output = "9" />
      <key code="26" output = "7" />
      <key code="27" output = "-" />
      <key code="28" output = "8" />
      <key code="29" output = "0" />
      <key code="30" output="${caps(11)}"/>
      <key code="31" output="${caps(8)}"/>
      <key code="32" output="${caps(6)}"/>
      <key code="33" output="${caps(10)}"/>
      <key code="34" output="${caps(7)}"/>
      <key code="35" output="${caps(9)}"/>
      <key code="36" output = "&#x000D;" />
      <key code="37" output="${caps(21)}"/>
      <key code="38" output="${caps(19)}"/>
      <key code="39" output = "&#x0027;" />
      <key code="40" output="${caps(20)}"/>
      <key code="41" output="${caps(22)}"/>
      <key code="42" output="${caps(12)}"/>
      <key code="43" output="${caps(31)}"/>
      <key code="44" output="${caps(33)}"/>
      <key code="45" output="${caps(29)}"/>
      <key code="46" output="${caps(30)}"/>
      <key code="47" output="${caps(32)}"/>
      <key code="48" output = "&#x0009;" />
      <key code="49" output = " " />
      <key code="50" output = "\`" />
      <key code = "51" output = "&#x0008;" />
      <key code="53" output = "&#x001B;" />
      <key code="64" output = "&#x0010;" />
      <key code="65" output = "" />
      <key code="66" output = "&#x001D;" />
      <key code="67" output = "*" />
      <key code="69" output = "+" />
      <key code="70" output = "&#x001C;" />
      <key code="71" output = "&#x001B;" />
      <key code="72" output = "&#x001F;" />
      <key code="75" output = "/" />
      <key code="76" output = "&#x0003;" />
      <key code="77" output = "&#x001E;" />
      <key code="78" output = "-" />
      <key code="79" output = "&#x0010;" />
      <key code="80" output = "&#x0010;" />
      <key code="81" output = "=" />
      <key code="82" output = "0" />
      <key code="83" output = "1" />
      <key code="84" output = "2" />
      <key code="85" output = "3" />
      <key code="86" output = "4" />
      <key code="87" output = "5" />
      <key code="88" output = "6" />
      <key code="89" output = "7" />
      <key code="91" output = "8" />
      <key code="92" output = "9" />
      <key code="96" output = "&#x0010;" />
      <key code="97" output = "&#x0010;" />
      <key code="98" output = "&#x0010;" />
      <key code="99" output = "&#x0010;" />
      <key code="100" output = "&#x0010;" />
      <key code="101" output = "&#x0010;" />
      <key code="103" output = "&#x0010;" />
      <key code="105" output = "&#x0010;" />
      <key code="106" output = "&#x0010;" />
      <key code="107" output = "&#x0010;" />
      <key code="109" output = "&#x0010;" />
      <key code="111" output = "&#x0010;" />
      <key code="113" output = "&#x0010;" />
      <key code="114" output = "&#x0005;" />
      <key code="115" output = "&#x0001;" />
      <key code="116" output = "&#x000B;" />
      <key code="117" output = "&#x007F;" />
      <key code="118" output = "&#x0010;" />
      <key code="119" output = "&#x0004;" />
      <key code="120" output = "&#x0010;" />
      <key code="121" output = "&#x000C;" />
      <key code="122" output = "&#x0010;" />
      <key code="123" output = "&#x001C;" />
      <key code="124" output = "&#x001D;" />
      <key code="125" output = "&#x001F;" />
      <key code="126" output = "&#x001E;" />
    </keyMap>
    <keyMap index="6" >
      <key code="0" output = "" />
      <key code="1" output = "" />
      <key code="2" output = "" />
      <key code="3" output = "" />
      <key code="4" output = "" />
      <key code="5" output = "" />
      <key code="6" output = "" />
      <key code="7" output = "" />
      <key code="8" output = "" />
      <key code="9" output = "" />
      <key code="11" output = "" />
      <key code="12" output = "" />
      <key code="13" output = "" />
      <key code="14" output = "" />
      <key code="15" output = "" />
      <key code="16" output = "" />
      <key code="17" output = "" />
      <key code="18" output = "" />
      <key code="19" output = "" />
      <key code="20" output = "" />
      <key code="21" output = "" />
      <key code="22" output = "" />
      <key code="23" output = "" />
      <key code="24" output = "" />
      <key code="25" output = "" />
      <key code="26" output = "" />
      <key code="27" output = "" />
      <key code="28" output = "" />
      <key code="29" output = "" />
      <key code="30" output = "" />
      <key code="31" output = "" />
      <key code="32" output = "" />
      <key code="33" output = "" />
      <key code="34" output = "" />
      <key code="35" output = "" />
      <key code="36" output = "&#x000D;" />
      <key code="37" output = "" />
      <key code="38" output = "" />
      <key code="39" output = "" />
      <key code="40" output = "" />
      <key code="41" output = "" />
      <key code="42" output = "" />
      <key code="43" output = "" />
      <key code="44" output = "" />
      <key code="45" output = "" />
      <key code="46" output = "" />
      <key code="47" output = "" />
      <key code="48" output = "&#x0009;" />
      <key code="49" output = "" />
      <key code="50" output = "" />
      <key code="51" output = "&#x0008;" />
      <key code="53" output = "&#x001B;" />
      <key code="64" output = "&#x0010;" />
      <key code="65" output = "" />
      <key code="66" output = "&#x001D;" />
      <key code="67" output = "" />
      <key code="69" output = "" />
      <key code="70" output = "&#x001C;" />
      <key code="71" output = "&#x001B;" />
      <key code="72" output = "&#x001F;" />
      <key code="75" output = "" />
      <key code="76" output = "&#x0003;" />
      <key code="77" output = "&#x001E;" />
      <key code="78" output = "" />
      <key code="79" output = "&#x0010;" />
      <key code="80" output = "&#x0010;" />
      <key code="81" output = "" />
      <key code="82" output = "" />
      <key code="83" output = "" />
      <key code="84" output = "" />
      <key code="85" output = "" />
      <key code="86" output = "" />
      <key code="87" output = "" />
      <key code="88" output = "" />
      <key code="89" output = "" />
      <key code="91" output = "" />
      <key code="92" output = "" />
      <key code="96" output = "&#x0010;" />
      <key code="97" output = "&#x0010;" />
      <key code="98" output = "&#x0010;" />
      <key code="99" output = "&#x0010;" />
      <key code="100" output = "&#x0010;" />
      <key code="101" output = "&#x0010;" />
      <key code="103" output = "&#x0010;" />
      <key code="105" output = "&#x0010;" />
      <key code="106" output = "&#x0010;" />
      <key code="107" output = "&#x0010;" />
      <key code="109" output = "&#x0010;" />
      <key code="111" output = "&#x0010;" />
      <key code="113" output = "&#x0010;" />
      <key code="114" output = "&#x0005;" />
      <key code="115" output = "&#x0001;" />
      <key code="116" output = "&#x000B;" />
      <key code="117" output = "&#x007F;" />
      <key code="118" output = "&#x0010;" />
      <key code="119" output = "&#x0004;" />
      <key code="120" output = "&#x0010;" />
      <key code="121" output = "&#x000C;" />
      <key code="122" output = "&#x0010;" />
      <key code="123" output = "&#x001C;" />
      <key code="124" output = "&#x001D;" />
      <key code="125" output = "&#x001F;" />
      <key code="126" output = "&#x001E;" />
    </keyMap>
  </keyMapSet>
  <keyMapSet id="JIS" >
    <keyMap index="0" baseMapSet="ANSI" baseIndex="0" >
      <key code="512" output="" />
    </keyMap>
    < keyMap index="1" baseMapSet="ANSI" baseIndex="1" >
      <key code="512" output="" />
    </keyMap>
    < keyMap index="2" baseMapSet="ANSI" baseIndex="2" >
      <key code="512" output="" />
    </keyMap>
    <keyMap index="3" baseMapSet="ANSI" baseIndex="3" >
      <key code="512" output="" />
    </keyMap>
    <keyMap index="4" baseMapSet="ANSI" baseIndex="4" >
      <key code="512" output="" />
    </keyMap>
    <keyMap index="5" baseMapSet="ANSI" baseIndex="5" >
      <key code="512" output="" />
    </keyMap>
    <keyMap index="6" baseMapSet="ANSI" baseIndex="6" >
      <key code="512" output="" />
    </keyMap>
  </keyMapSet>
</keyboard>`

  return { content, filename: `${layout.name}.keylayout` }
}

export { mac }

export default mac