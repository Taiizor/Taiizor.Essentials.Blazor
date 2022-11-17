using System.Text;
using Taiizor.Essentials.Blazor.Enum;
using HJ = Taiizor.Essentials.Blazor.Helper.Javascript;

namespace Taiizor.Essentials.Blazor.Extension
{
    internal class Javascript
    {
        public static string File(JavascriptEnum Javascript)
        {
            return HJ.LoadFile(Javascript);
        }

        public static string FileScript(JavascriptEnum Javascript)
        {
            StringBuilder stringBuilder = new();

            stringBuilder.AppendLine("<script type=\"text/javascript\">");

            stringBuilder.AppendLine(HJ.LoadFile(Javascript));

            stringBuilder.AppendLine("</script>");

            return stringBuilder.ToString();
        }
    }
}