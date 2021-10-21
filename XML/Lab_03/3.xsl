<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<table border="1">
<tr bgcolor = "rgb(21, 189, 175)">
<th>Университет</th>
<th>Проходной балл</th>
<th>План набора</th>
<th>Город</th>
</tr>
<xsl:for-each select="table/tr">
<tr>
<td><xsl:value-of select="university"/></td>
<td><xsl:value-of select="point"/></td>
<td><xsl:value-of select="plan"/></td>
<td><xsl:value-of select="city"/></td>


</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>