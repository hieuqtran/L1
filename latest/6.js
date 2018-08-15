(this.webpackJsonp=this.webpackJsonp||[]).push([[6],{539:function(e,t,n){"use strict";n.r(t);var r,i,o,a,u,s,c,f,d=monaco.Promise,l=function(){function e(e){var t=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval(function(){return t._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return t._stopWorker()})}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){this._worker&&(Date.now()-this._lastUsedTime>12e4&&this._stopWorker())},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t,n,r,i,o=this,a=[],u=0;u<arguments.length;u++)a[u]=arguments[u];return t=this._getClient().then(function(t){e=t}).then(function(e){return o._worker.withSyncedResources(a)}).then(function(t){return e}),i=new d(function(e,t){n=e,r=t},function(){}),t.then(n,r),i},e}();!function(e){e.create=function(e,t){return{line:e,character:t}},e.is=function(e){var t=e;return F.defined(t)&&F.number(t.line)&&F.number(t.character)}}(r||(r={})),function(e){e.create=function(e,t,n,i){if(F.number(e)&&F.number(t)&&F.number(n)&&F.number(i))return{start:r.create(e,t),end:r.create(n,i)};if(r.is(e)&&r.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+i+"]")},e.is=function(e){var t=e;return F.defined(t)&&r.is(t.start)&&r.is(t.end)}}(i||(i={})),function(e){e.create=function(e,t){return{uri:e,range:t}},e.is=function(e){var t=e;return F.defined(t)&&i.is(t.range)&&(F.string(t.uri)||F.undefined(t.uri))}}(o||(o={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(a||(a={})),function(e){e.create=function(e,t,n,r,i){var o={range:e,message:t};return F.defined(n)&&(o.severity=n),F.defined(r)&&(o.code=r),F.defined(i)&&(o.source=i),o},e.is=function(e){var t=e;return F.defined(t)&&i.is(t.range)&&F.string(t.message)&&(F.number(t.severity)||F.undefined(t.severity))&&(F.number(t.code)||F.string(t.code)||F.undefined(t.code))&&(F.string(t.source)||F.undefined(t.source))}}(u||(u={})),function(e){e.create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return F.defined(n)&&n.length>0&&(i.arguments=n),i},e.is=function(e){var t=e;return F.defined(t)&&F.string(t.title)&&F.string(t.title)}}(s||(s={})),function(e){e.replace=function(e,t){return{range:e,newText:t}},e.insert=function(e,t){return{range:{start:e,end:e},newText:t}},e.del=function(e){return{range:e,newText:""}}}(c||(c={})),function(e){e.create=function(e,t){return{textDocument:e,edits:t}},e.is=function(e){var t=e;return F.defined(t)&&g.is(t.textDocument)&&Array.isArray(t.edits)}}(f||(f={}));var h,g,p,m,v,b,_,k,C,y,w,E,S,x,I,A,T,M,P=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,t){this.edits.push(c.insert(e,t))},e.prototype.replace=function(e,t){this.edits.push(c.replace(e,t))},e.prototype.delete=function(e){this.edits.push(c.del(e))},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),e&&(this._workspaceEdit=e,e.documentChanges?e.documentChanges.forEach(function(e){var n=new P(e.edits);t._textEditChanges[e.textDocument.uri]=n}):e.changes&&Object.keys(e.changes).forEach(function(n){var r=new P(e.changes[n]);t._textEditChanges[n]=r}))}Object.defineProperty(e.prototype,"edit",{get:function(){return this._workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){if(g.is(e)){if(this._workspaceEdit||(this._workspaceEdit={documentChanges:[]}),!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for versioned document changes.");var t=e;if(!(r=this._textEditChanges[t.uri])){var n={textDocument:t,edits:i=[]};this._workspaceEdit.documentChanges.push(n),r=new P(i),this._textEditChanges[t.uri]=r}return r}if(this._workspaceEdit||(this._workspaceEdit={changes:Object.create(null)}),!this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new P(i),this._textEditChanges[e]=r}return r}}();!function(e){e.create=function(e){return{uri:e}},e.is=function(e){var t=e;return F.defined(t)&&F.string(t.uri)}}(h||(h={})),function(e){e.create=function(e,t){return{uri:e,version:t}},e.is=function(e){var t=e;return F.defined(t)&&F.string(t.uri)&&F.number(t.version)}}(g||(g={})),function(e){e.create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},e.is=function(e){var t=e;return F.defined(t)&&F.string(t.uri)&&F.string(t.languageId)&&F.number(t.version)&&F.string(t.text)}}(p||(p={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(m||(m={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(v||(v={})),function(e){e.PlainText=1,e.Snippet=2}(b||(b={})),function(e){e.create=function(e){return{label:e}}}(_||(_={})),function(e){e.create=function(e,t){return{items:e||[],isIncomplete:!!t}}}(k||(k={})),function(e){e.fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}}(C||(C={})),function(e){e.create=function(e,t){return t?{label:e,documentation:t}:{label:e}}}(y||(y={})),function(e){e.create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return F.defined(t)&&(i.documentation=t),F.defined(n)?i.parameters=n:i.parameters=[],i}}(w||(w={})),function(e){e.Text=1,e.Read=2,e.Write=3}(E||(E={})),function(e){e.create=function(e,t){var n={range:e};return F.number(t)&&(n.kind=t),n}}(S||(S={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(x||(x={})),function(e){e.create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o}}(I||(I={})),function(e){e.create=function(e){return{diagnostics:e}},e.is=function(e){var t=e;return F.defined(t)&&F.typedArray(t.diagnostics,u.is)}}(A||(A={})),function(e){e.create=function(e,t){var n={range:e};return F.defined(t)&&(n.data=t),n},e.is=function(e){var t=e;return F.defined(t)&&i.is(t.range)&&(F.undefined(t.command)||s.is(t.command))}}(T||(T={})),function(e){e.create=function(e,t){return{tabSize:e,insertSpaces:t}},e.is=function(e){var t=e;return F.defined(t)&&F.number(t.tabSize)&&F.boolean(t.insertSpaces)}}(M||(M={}));var j=function(){return function(){}}();!function(e){e.create=function(e,t){return{range:e,target:t}},e.is=function(e){var t=e;return F.defined(t)&&i.is(t.range)&&(F.undefined(t.target)||F.string(t.target))}}(j||(j={}));var O,D;!function(e){e.create=function(e,t,n,r){return new W(e,t,n,r)},e.is=function(e){var t=e;return!!(F.defined(t)&&F.string(t.uri)&&(F.undefined(t.languageId)||F.string(t.languageId))&&F.number(t.lineCount)&&F.func(t.getText)&&F.func(t.positionAt)&&F.func(t.offsetAt))},e.applyEdits=function(e,t){for(var n=e.getText(),r=function e(t,n){if(t.length<=1)return t;var r=t.length/2|0,i=t.slice(0,r),o=t.slice(r);e(i,n),e(o,n);for(var a=0,u=0,s=0;a<i.length&&u<o.length;){var c=n(i[a],o[u]);t[s++]=c<=0?i[a++]:o[u++]}for(;a<i.length;)t[s++]=i[a++];for(;u<o.length;)t[s++]=o[u++];return t}(t,function(e,t){return 0==e.range.start.line-t.range.start.line?e.range.start.character-t.range.start.character:0}),i=n.length,o=r.length-1;o>=0;o--){var a=r[o],u=e.offsetAt(a.range.start),s=e.offsetAt(a.range.end);if(!(s<=i))throw new Error("Ovelapping edit");n=n.substring(0,u)+a.newText+n.substring(s,n.length),i=u}return n}}(O||(O={})),function(e){e.Manual=1,e.AfterDelay=2,e.FocusOut=3}(D||(D={}));var F,W=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,i=t.length;if(0===i)return r.create(0,e);for(;n<i;){var o=Math.floor((n+i)/2);t[o]>e?i=o:n=o+1}var a=n-1;return r.create(a,e-t[a])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}();!function(e){var t=Object.prototype.toString;e.defined=function(e){return void 0!==e},e.undefined=function(e){return void 0===e},e.boolean=function(e){return!0===e||!1===e},e.string=function(e){return"[object String]"===t.call(e)},e.number=function(e){return"[object Number]"===t.call(e)},e.func=function(e){return"[object Function]"===t.call(e)},e.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)}}(F||(F={}));var N=monaco.Uri,L=monaco.Range,V=function(){function e(e,t,n){var r=this;this._languageId=e,this._worker=t,this._disposables=[],this._listener=Object.create(null);var i=function(e){var t,n=e.getModeId();n===r._languageId&&(r._listener[e.uri.toString()]=e.onDidChangeContent(function(){clearTimeout(t),t=setTimeout(function(){return r._doValidate(e.uri,n)},500)}),r._doValidate(e.uri,n))},o=function(e){monaco.editor.setModelMarkers(e,r._languageId,[]);var t=e.uri.toString(),n=r._listener[t];n&&(n.dispose(),delete r._listener[t])};this._disposables.push(monaco.editor.onDidCreateModel(i)),this._disposables.push(monaco.editor.onWillDisposeModel(function(e){o(e),r._resetSchema(e.uri)})),this._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){o(e.model),i(e.model),r._resetSchema(e.model.uri)})),this._disposables.push(n.onDidChange(function(e){monaco.editor.getModels().forEach(function(e){e.getModeId()===r._languageId&&(o(e),i(e))})})),this._disposables.push({dispose:function(){for(var e in monaco.editor.getModels().forEach(o),r._listener)r._listener[e].dispose()}}),monaco.editor.getModels().forEach(i)}return e.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},e.prototype._resetSchema=function(e){this._worker().then(function(t){t.resetSchema(e.toString())})},e.prototype._doValidate=function(e,t){this._worker(e).then(function(n){return n.doValidation(e.toString()).then(function(n){var r=n.map(function(e){return n="number"==typeof(t=e).code?String(t.code):t.code,{severity:function(e){switch(e){case a.Error:return monaco.MarkerSeverity.Error;case a.Warning:return monaco.MarkerSeverity.Warning;case a.Information:return monaco.MarkerSeverity.Info;case a.Hint:return monaco.MarkerSeverity.Hint;default:return monaco.MarkerSeverity.Info}}(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source};var t,n}),i=monaco.editor.getModel(e);i.getModeId()===t&&monaco.editor.setModelMarkers(i,t,r)})}).then(void 0,function(e){console.error(e)})},e}();function R(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function U(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function H(e){if(e)return new L(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function K(e){var t=monaco.languages.CompletionItemKind;switch(e){case v.Text:return t.Text;case v.Method:return t.Method;case v.Function:return t.Function;case v.Constructor:return t.Constructor;case v.Field:return t.Field;case v.Variable:return t.Variable;case v.Class:return t.Class;case v.Interface:return t.Interface;case v.Module:return t.Module;case v.Property:return t.Property;case v.Unit:return t.Unit;case v.Value:return t.Value;case v.Enum:return t.Enum;case v.Keyword:return t.Keyword;case v.Snippet:return t.Snippet;case v.Color:return t.Color;case v.File:return t.File;case v.Reference:return t.Reference}return t.Property}function z(e){if(e)return{range:H(e.range),text:e.newText}}var B=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[" ",":"]},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,t,n){e.getWordUntilPosition(t);var r=e.uri;return Z(n,this._worker(r).then(function(e){return e.doComplete(r.toString(),R(t))}).then(function(e){if(e){var t=e.items.map(function(e){var t={label:e.label,insertText:e.insertText,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,kind:K(e.kind)};return e.textEdit&&(t.range=H(e.textEdit.range),t.insertText=e.textEdit.newText),e.insertTextFormat===b.Snippet&&(t.insertText={value:t.insertText}),t});return{isIncomplete:e.isIncomplete,items:t}}}))},e}();function q(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}var J=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,t,n){var r=e.uri;return Z(n,this._worker(r).then(function(e){return e.doHover(r.toString(),R(t))}).then(function(e){if(e)return{range:H(e.range),contents:function(e){if(e)return Array.isArray(e)?e.map(q):[q(e)]}(e.contents)}}))},e}();var $=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,t){var n=e.uri;return Z(t,this._worker(n).then(function(e){return e.findDocumentSymbols(n.toString())}).then(function(e){if(e)return e.map(function(e){return{name:e.name,containerName:e.containerName,kind:function(e){var t=monaco.languages.SymbolKind;switch(e){case x.File:return t.Array;case x.Module:return t.Module;case x.Namespace:return t.Namespace;case x.Package:return t.Package;case x.Class:return t.Class;case x.Method:return t.Method;case x.Property:return t.Property;case x.Field:return t.Field;case x.Constructor:return t.Constructor;case x.Enum:return t.Enum;case x.Interface:return t.Interface;case x.Function:return t.Function;case x.Variable:return t.Variable;case x.Constant:return t.Constant;case x.String:return t.String;case x.Number:return t.Number;case x.Boolean:return t.Boolean;case x.Array:return t.Array}return t.Function}(e.kind),location:(t=e.location,{uri:N.parse(t.uri),range:H(t.range)})};var t})}))},e}();function G(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var Q=function(){function e(e){this._worker=e}return e.prototype.provideDocumentFormattingEdits=function(e,t,n){var r=e.uri;return Z(n,this._worker(r).then(function(e){return e.format(r.toString(),null,G(t)).then(function(e){if(e&&0!==e.length)return e.map(z)})}))},e}(),X=function(){function e(e){this._worker=e}return e.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){var i=e.uri;return Z(r,this._worker(i).then(function(e){return e.format(i.toString(),U(t),G(n)).then(function(e){if(e&&0!==e.length)return e.map(z)})}))},e}(),Y=function(){function e(e){this._worker=e}return e.prototype.provideDocumentColors=function(e,t){var n=e.uri;return Z(t,this._worker(n).then(function(e){return e.findDocumentColors(n.toString())}).then(function(e){if(e)return e.map(function(e){return{color:e.color,range:H(e.range)}})}))},e.prototype.provideColorPresentations=function(e,t,n){var r=e.uri;return Z(n,this._worker(r).then(function(e){return e.getColorPresentations(r.toString(),t.color,U(t.range))}).then(function(e){if(e)return e.map(function(e){var t={label:e.label};return e.textEdit&&(t.textEdit=z(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(z)),t})}))},e}();function Z(e,t){return t.cancel&&e.onCancellationRequested(function(){return t.cancel()}),t}function ee(e,t){void 0===t&&(t=!1);var n=0,r=e.length,i="",o=0,a=16,u=0;function s(t,r){for(var i=0,o=0;i<t||!r;){var a=e.charCodeAt(n);if(a>=48&&a<=57)o=16*o+a-48;else if(a>=65&&a<=70)o=16*o+a-65+10;else{if(!(a>=97&&a<=102))break;o=16*o+a-97+10}n++,i++}return i<t&&(o=-1),o}function c(){if(i="",u=0,o=n,n>=r)return o=r,a=17;var t=e.charCodeAt(n);if(te(t)){do{n++,i+=String.fromCharCode(t),t=e.charCodeAt(n)}while(te(t));return a=15}if(ne(t))return n++,i+=String.fromCharCode(t),13===t&&10===e.charCodeAt(n)&&(n++,i+="\n"),a=14;switch(t){case 123:return n++,a=1;case 125:return n++,a=2;case 91:return n++,a=3;case 93:return n++,a=4;case 58:return n++,a=6;case 44:return n++,a=5;case 34:return n++,i=function(){for(var t="",i=n;;){if(n>=r){t+=e.substring(i,n),u=2;break}var o=e.charCodeAt(n);if(34===o){t+=e.substring(i,n),n++;break}if(92!==o){if(o>=0&&o<=31){if(ne(o)){t+=e.substring(i,n),u=2;break}u=6}n++}else{if(t+=e.substring(i,n),++n>=r){u=2;break}switch(o=e.charCodeAt(n++)){case 34:t+='"';break;case 92:t+="\\";break;case 47:t+="/";break;case 98:t+="\b";break;case 102:t+="\f";break;case 110:t+="\n";break;case 114:t+="\r";break;case 116:t+="\t";break;case 117:var a=s(4,!0);a>=0?t+=String.fromCharCode(a):u=4;break;default:u=5}i=n}}return t}(),a=10;case 47:var c=n-1;if(47===e.charCodeAt(n+1)){for(n+=2;n<r&&!ne(e.charCodeAt(n));)n++;return i=e.substring(c,n),a=12}if(42===e.charCodeAt(n+1)){n+=2;for(var d=!1;n<r;){if(42===e.charCodeAt(n)&&n+1<r&&47===e.charCodeAt(n+1)){n+=2,d=!0;break}n++}return d||(n++,u=1),i=e.substring(c,n),a=13}return i+=String.fromCharCode(t),n++,a=16;case 45:if(i+=String.fromCharCode(t),++n===r||!re(e.charCodeAt(n)))return a=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return i+=function(){var t=n;if(48===e.charCodeAt(n))n++;else for(n++;n<e.length&&re(e.charCodeAt(n));)n++;if(n<e.length&&46===e.charCodeAt(n)){if(!(++n<e.length&&re(e.charCodeAt(n))))return u=3,e.substring(t,n);for(n++;n<e.length&&re(e.charCodeAt(n));)n++}var r=n;if(n<e.length&&(69===e.charCodeAt(n)||101===e.charCodeAt(n)))if((++n<e.length&&43===e.charCodeAt(n)||45===e.charCodeAt(n))&&n++,n<e.length&&re(e.charCodeAt(n))){for(n++;n<e.length&&re(e.charCodeAt(n));)n++;r=n}else u=3;return e.substring(t,r)}(),a=11;default:for(;n<r&&f(t);)n++,t=e.charCodeAt(n);if(o!==n){switch(i=e.substring(o,n)){case"true":return a=8;case"false":return a=9;case"null":return a=7}return a=16}return i+=String.fromCharCode(t),n++,a=16}}function f(e){if(te(e)||ne(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:return!1}return!0}return{setPosition:function(e){n=e,i="",o=0,a=16,u=0},getPosition:function(){return n},scan:t?function(){var e;do{e=c()}while(e>=12&&e<=15);return e}:c,getToken:function(){return a},getTokenValue:function(){return i},getTokenOffset:function(){return o},getTokenLength:function(){return n-o},getTokenError:function(){return u}}}function te(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function ne(e){return 10===e||13===e||8232===e||8233===e}function re(e){return e>=48&&e<=57}var ie=ee;function oe(e){return{getInitialState:function(){return new ve(null,null,!1)},tokenize:function(t,n,r,i){return function(e,t,n,r,i){void 0===r&&(r=0);var o=0,a=!1;switch(n.scanError){case 2:t='"'+t,o=1;break;case 1:t="/*"+t,o=2}var u,s,c=ie(t),f=n.lastWasColon;s={tokens:[],endState:n.clone()};for(;;){var d=r+c.getPosition(),l="";if(17===(u=c.scan()))break;if(d===r+c.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+t.substr(c.getPosition(),3));switch(a&&(d-=o),a=o>0,u){case 1:case 2:l=ae,f=!1;break;case 3:case 4:l=ue,f=!1;break;case 6:l=se,f=!0;break;case 5:l=ce,f=!1;break;case 8:case 9:l=fe,f=!1;break;case 7:l=de,f=!1;break;case 10:l=f?le:ge,f=!1;break;case 11:l=he,f=!1}if(e)switch(u){case 12:l=me;break;case 13:l=pe}s.endState=new ve(n.getStateData(),c.getTokenError(),f),s.tokens.push({startIndex:d,scopes:l})}return s}(e,t,n,r)}}}var ae="delimiter.bracket.json",ue="delimiter.array.json",se="delimiter.colon.json",ce="delimiter.comma.json",fe="keyword.json",de="keyword.json",le="string.value.json",he="number.json",ge="string.key.json",pe="comment.block.json",me="comment.line.json",ve=function(){function e(e,t,n){this._state=e,this.scanError=t,this.lastWasColon=n}return e.prototype.clone=function(){return new e(this._state,this.scanError,this.lastWasColon)},e.prototype.equals=function(t){return t===this||!!(t&&t instanceof e)&&(this.scanError===t.scanError&&this.lastWasColon===t.lastWasColon)},e.prototype.getStateData=function(){return this._state},e.prototype.setStateData=function(e){this._state=e},e}();function be(e){var t=[],n=new l(e);t.push(n);var r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.getLanguageServiceWorker.apply(n,e)},i=e.languageId;t.push(monaco.languages.registerCompletionItemProvider(i,new B(r))),t.push(monaco.languages.registerHoverProvider(i,new J(r))),t.push(monaco.languages.registerDocumentSymbolProvider(i,new $(r))),t.push(monaco.languages.registerDocumentFormattingEditProvider(i,new Q(r))),t.push(monaco.languages.registerDocumentRangeFormattingEditProvider(i,new X(r))),t.push(new V(i,r,e)),t.push(monaco.languages.setTokensProvider(i,oe(!0))),t.push(monaco.languages.setLanguageConfiguration(i,_e)),t.push(monaco.languages.registerColorProvider(i,new Y(r)))}n.d(t,"setupMode",function(){return be});var _e={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]}}}]);