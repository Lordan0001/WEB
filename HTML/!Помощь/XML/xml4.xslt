<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
    <table border="2" style="text-align:center" align="center">
        <tr bgcolor="aqua">
            <th style="text-align:center">Фамилия</th>
            <th style="text-align:center">Имя</th>
            <th style="text-align:center">Год рождения</th>  
            <th style="text-align:center">Баллы</th>
        </tr>
    <xsl:for-each select="root/group">
    <xsl:sort select="YEAR"/>
    <tr>
        <td><xsl:value-of select="SURNAME"/></td>
        <td><xsl:value-of select="NAME"/></td>
        <td><xsl:value-of select="YEAR"/></td>
        <xsl:choose>
            <xsl:when test="MARK = 6">
                <td bgcolor="Green"><xsl:value-of select="MARK"/></td>
            </xsl:when>
            <xsl:when test="MARK &lt; 6">
                <td bgcolor="red"><xsl:value-of select="MARK"/></td>
            </xsl:when>
	        <xsl:otherwise>
	            <td><xsl:value-of select="MARK"/></td>
	        </xsl:otherwise>
        </xsl:choose>
    </tr>
    </xsl:for-each>
    </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
