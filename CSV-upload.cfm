<cfif IsDefined("FORM.file")>
  <cfmail from="dg2@marcopoloni.com" to="dg2@marcopoloni.com" subject="file defined">
yay
  </cfmail>
  <cffile action="upload" destination="D:\Websites\marcopoloni.com\Demos" filefield="file" nameconflict="overwrite">
<cfelse>
  <cfmail from="dg2@marcopoloni.com" to="dg2@marcopoloni.com" subject="file not defined">
sorry  
  </cfmail>
</cfif>