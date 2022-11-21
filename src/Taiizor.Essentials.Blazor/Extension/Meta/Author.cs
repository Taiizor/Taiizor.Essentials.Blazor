namespace Taiizor.Essentials.Blazor.Extension.Meta
{
    public class Author
    {   
        public static async Task Set(string Content)
        {
            await Interop.Call("Taiizor.Meta.Author.Set", Content);
        }
        
        public static async Task Remove(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.Author.Remove", Execute);
        }
    }
}